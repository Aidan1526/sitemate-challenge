import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

Meteor.methods({
  'post'(issue) {
    HTTP.post("http://127.0.0.1:8000/api", issue)
  }
})