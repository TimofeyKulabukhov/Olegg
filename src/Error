from flask import Flask, render_template, request
from werkzeug.exceptions import HTTPException

app = Flask(__name)

def error_page(status_code, message):
    return render_template('error.html', status_code=status_code, message=message), status_code

# Страница 400
@app.errorhandler(400)
def bad_request(error):
    return error_page(400, 'Bad Request')

# Страница 401
@app.errorhandler(401)
def unauthorized(error):
    return error_page(401, 'Unauthorized')

# Страница 403
@app.errorhandler(403)
def forbidden(error):
    return error_page(403, 'Forbidden')

# Страница 404
@app.errorhandler(404)
def page_not_found(error):
    return error_page(404, 'Page Not Found')

# Страница 405
@app.errorhandler(405)
def method_not_allowed(error):
    return error_page(405, 'Method Not Allowed')

# Страница 402 (Payment Required)
@app.errorhandler(402)
def payment_required(error):
    return error_page(402, 'Payment Required')

# Страница 500
@app.errorhandler(500)
def internal_server_error(error):
    return error_page(500, 'Internal Server Error')

# Страница 501
@app.errorhandler(501)
def not_implemented(error):
    return error_page(501, 'Not Implemented')

# Страница 502
@app.errorhandler(502)
def bad_gateway(error):
    return error_page(502, 'Bad Gateway')

# Страница 503
@app.errorhandler(503)
def service_unavailable(error):
    return error_page(503, 'Service Unavailable')

@app.route('/')
def index():
    return 'Welcome to the homepage'

if __name__ == '__main__':
    app.run(debug=True)
