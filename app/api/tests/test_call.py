from app import app
import os

def test_get_welcome(monkeypatch):
    # arrange
    # mock the environment variable
    welcome_msg = 'welcome on backend'
    monkeypatch.setenv('WELCOME', welcome_msg)

    # act
    response = app.test_client().get('/api/welcome')

    # assert
    assert response
    assert response.status_code == 200
    assert response.json
    assert response.json.get('msg') == welcome_msg