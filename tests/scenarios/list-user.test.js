import { assert } from "chai";
import reqrestApi from '$root/page/reqres.api';
import * as data from '$root/data/user.data';

describe('List of Users', function() {
    it('Success get Reqres list user', async () => {
        const response = await reqrestApi.list_user(data.LIST_USER);

        assert.equal(response.status, 200);
    });
});