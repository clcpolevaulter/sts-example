const region = "us-east-1";
const accountNumber = '';
const roleName = '';

const {STSClient, AssumeRoleCommand} = require("@aws-sdk/client-sts");
const client = new STSClient({region: region});

describe('STS Example', () => {
    it('This will hang in docker...', async () => {
        console.log(roleName);
        const command = new AssumeRoleCommand({
            RoleArn: 'arn:aws:iam::' + accountNumber + ':role/' + roleName,
            RoleSessionName: 'axios',
        });

        const data = await client.send(command);
        console.log(data.AssumedRoleUser);
    });
});
