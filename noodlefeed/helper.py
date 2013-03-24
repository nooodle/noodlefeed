# -*- coding: utf-8 -*-
from functools import wraps
from flask import redirect, session, url_for

import settings


def authenticated(f):
    """Check if user is logged in."""
    @wraps(f)
    def decorated(*args, **kwargs):
        if not session.get('email'):
            return redirect(url_for('main'))
        return f(*args, **kwargs)
    return decorated
