import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd
import yfinance as yf
from dash.dependencies import Input, Output

# Create a Dash app
app = dash.Dash()

# Initial stock data
ticker = 'AAPL'  # Example: Apple stock

# Layout
app.layout = html.Div([
    dcc.Graph(id='live-update-graph'),
    dcc.Interval(
        id='interval-component',
        interval=60*1000,  # Update every minute
        n_intervals=0
    )
])

# Callback to update graph
@app.callback(
    Output('live-update-graph', 'figure'),
    [Input('interval-component', 'n_intervals')]
)
def update_graph(n):
    # Get the latest data
    data = yf.download(ticker, period="5d", interval="1m")
    
    # Create the graph
    figure = {
        'data': [
            go.Candlestick(
                x=data.index,
                open=data['Open'],
                high=data['High'],
                low=data['Low'],
                close=data['Close']
            )
        ],
        'layout': go.Layout(
            title=f'{ticker} Live Stock Data',
            xaxis={'rangeslider': {'visible': False}},
            yaxis={'title': 'Price (in USD)'}
        )
    }
    return figure

if __name__ == '__main__':
    app.run_server(debug=True)
