import { assert } from "chai";
import bookerApi from '$root/page/booker.api';

describe('Booker Auth', function() {
    it('Success Auth', async () => {
        const response = await bookerApi.user_auth();
        assert.equal(response.status, 200);
    });
});