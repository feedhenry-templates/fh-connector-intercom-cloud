FORMAT: 1A

# FeedHenry Intercom Connector
[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-intercom-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-intercom-cloud)

The FeedHenry Intercom Connector. For more information on Intercom see: [https://github.com/silentrob/node-intercom](https://github.com/silentrob/node-intercom).

# Group Intercom Connector API

# Intercom [/cloud/intercom]

User info

## Intercom [POST] 

Login to Intercom and retrieve user information

+ Request (application/json)
    + Body
        {
          "user": "customeremail@example.com"
        }

+ Response 200 (application/json)
    + Body
            {
              "ok": "true"
            }
