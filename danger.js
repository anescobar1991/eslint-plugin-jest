'use strict';

const { danger, fail, warn } = require('danger');

// Ensure that people include a description on their PRss
if (danger.github.pr.body.length === 0) {
  fail('Please include a body for your PR');
}

// Request a changelog entry for changes in rules/*
const modifiedFiles = danger.git.modified_files;
const hasRulesChanges = modifiedFiles.find(path => path.startsWith('rules/'));
const changelogModfied = modifiedFiles.includes('CHANGELOG.md');

if (hasRulesChanges && changelogModfied) {
  warn("Please add a CHANGELOG entry to PRs which modify this repo's ruleset.");
}
