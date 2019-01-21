#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=ee2b161c5a985bc48f84949542f4f6cbec783bdd \
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github.com/AndySmithSL/react-testing/tree/master