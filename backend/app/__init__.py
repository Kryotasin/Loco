from flask import Flask
from app.routes.auth import auth_bp
from app.routes.api import api_bp
# from app.config.secrets import Config

def create_app():
    """Application Factory to create and configure the Flask app."""
    app = Flask(__name__)

    # Load configurations
    # app.config.from_object(Config)

    # Initialize extensions
    # db.init_app(app)

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(api_bp, url_prefix="/api")

    return app
