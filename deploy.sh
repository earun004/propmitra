#/bin/bash
#upload files
aws s3 cp ./dist s3://seconddomain.tk --recursive --acl public-read