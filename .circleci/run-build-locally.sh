#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=fe681488237250c350706ebdd48d238fb0ae00b9 \
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github.com/AndySmithSL/react-testing/tree/master