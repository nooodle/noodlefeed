# API Reference - version 1.0

These are all the API calls that NoodleFeed will provide, after a user has successfully authenticated.

## Errors

Same as above but the meta portion returns with an appropriate error code (e.g. 500 or 403) and an error message will follow

    'meta': {
        'code': 403,
        'message': 'Not allowed'
    }
