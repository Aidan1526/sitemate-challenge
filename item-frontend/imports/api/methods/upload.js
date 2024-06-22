import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

Meteor.methods({
  'post'(issue) {
    HTTP.call("POST", "http://127.0.0.1:8000/api", {"data": issue})
  },

  'get'(issue) {
    HTTP.call("GET", "http://127.0.0.1:8000/api/" + issue.issue_id, (err, res) => {
      console.log(res.data)
    })
  },

  'delete'(issue) {
    HTTP.call("Delete", "http://127.0.0.1:8000/api/" + issue.issue_id, (err, res) => {
      console.log(res.data)
    })
  },

  'update'(issue) {
    HTTP.call("put", "http://127.0.0.1:8000/api", {"data": issue} )  },
})