import datetime
import hashlib
import time

import settings
from database import db


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), unique=True)

    def __repr__(self):
        return '<User: %s>' % self.email

    def __eq__(self, other):
        return self.id == other.id

    def to_json(self):
        return dict(id=self.id, email=self.email)
