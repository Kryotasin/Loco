from flask import Blueprint, jsonify, request
from app.services.auth_service import google_login, google_callback

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login/google', methods=['GET'])
def login_with_google():
    return google_login()

@auth_bp.route('/callback', methods=['GET'])
def google_auth_callback():
    code = request.args.get("code")
    return google_callback(code)
