import { assert } from "chai";
import reqrestApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data'
import { it } from "mocha";

describe('Register', function() {
    it('should failed', async () => {
        const response = await reqrestApi.register(data.INVALID_REGISTER);

        assert.equal(response.status, 400);
        //assert.containsAllKeys(response.data, ["Error"]);
        assert.isString(response.data.error);
    });

    it('Success Register Reqres', async () => {
        const response = await reqrestApi.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
        console.log(response.data);
    });
});