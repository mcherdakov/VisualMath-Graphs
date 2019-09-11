from app import app, db
from app.models import User, Lecture


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Lecture': Lecture}
from flask_socketio import SocketIO
from app import app, sio

@sio.on('color', namespace='/flask')
def change_color(msg):
    sio.emit('data', msg, namespace='/flask')

if __name__ == '__main__':
    sio.run(app, debug=True)
