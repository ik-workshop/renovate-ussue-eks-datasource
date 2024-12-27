const Fs = require('fs');

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": [
    "ik-workshop/renovate-ussue-eks-datasource"
  ],
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": true,
  "recreateWhen": "always",
  "onboarding": false,
  "requireConfig": "optional",
  "baseBranches": ["master", "main"],
  "packageRules": [
    {
      "matchDatasources": ["aws-eks"],
      "prBodyColumns": [
        "Package",
        "Update",
        "Change",
        "Sources",
        "Changelog"
      ],
      "prBodyDefinitions": {
        "Sources": '[▶️](https://github.com/aws/eks-distro/)',
        "Changelog": '[▶️](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-{{{newVersion}}}.md)',
      }
    }
  ],
  "customManagers": [
    {
      "customType": "regex",
      "fileMatch": [".*\\.yaml"],
      "matchStrings": [
        ".*# renovate: eksFilter=(?<packageName>.*?)\n.*?[a-zA-Z0-9-_:]*[ ]*?[:|=][ ]*?[\"|']?(?<currentValue>[a-zA-Z0-9-_.]+)[\"|']?.*"
      ],
      "datasourceTemplate": "aws-eks",
      "versioningTemplate": "loose" // aws-eks versioning is not yet supported
    }
  ]
}
