from flask import Blueprint, request, jsonify


# Create a Blueprint for the API
api_bp = Blueprint('api', __name__)


# Create a new record
@api_bp.route('/create', methods=['POST'])
def create():
    data = request.json
    try:
        record = create_record(data)  # Delegate to db_service
        return jsonify({"message": "Record created successfully", "record": record}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400
