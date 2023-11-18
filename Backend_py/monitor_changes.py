import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess
import os


class CodeChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return
        if event.event_type == 'modified' and event.src_path.endswith('.py'):
            print(f'File {event.src_path} has been modified. Restarting Django development server...')
            manage_py_path = os.path.join(os.path.dirname(__file__), 'manage.py')
            command = ['python', manage_py_path, 'runserver']
            subprocess.run(command)

if __name__ == "__main__":
    path = '.' 
    event_handler = CodeChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
