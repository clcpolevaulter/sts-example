# sts-example

This repo demonstrates an issue that occurs with the sts client when it call the metadata server using Jest.

## Steps to reproduce

On an AWS EC2 with docker installed run:
``` bash
docker run -w /workspace -v $(pwd):/workspace  node:12-alpine npm run test
```

Result:

```
> sts-example@1.0.0 test /workspace
> npm ci && jest --testEnvironment=node --testTimeout=60000

added 580 packages in 7.106s
  console.log
    <redacted>

      at Object.<anonymous> (test/sample.spec.js:10:17)

PASS test/sample.spec.js
  STS Example
    ✓ This will hang in docker... (1092 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.781 s
Ran all test suites.
  console.log
    {
      AssumedRoleId: '<redacted>',
      Arn: 'arn:aws:sts::<redacted>:assumed-role/<redacted>/axios'
    }

      at Object.<anonymous> (test/sample.spec.js:17:17)

Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```
