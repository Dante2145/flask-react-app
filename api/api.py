import datetime 
from flask import Flask, render_template, request, jsonify
import subprocess

app =  Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time':datetime.datetime.now()}

@app.route('/api/scan', methods=['POST'])
def scan():
    data = request.get_json()
    input_value = data.get('input')

    # Use subprocess to run nmap
    try:
        result = subprocess.check_output(['nmap', input_value])
        return jsonify({'result': result.decode('utf-8')})
    except Exception as e:
        return jsonify({'error': str(e)})

#Testing Editing Routes, Return must be String, not Integers. 
@app.route('/test')
def test():
   data = request.get_json()
   input_value = data.get('input')
   return str(input_value)


if __name__ == '__main__':
    app.run(debug=True)