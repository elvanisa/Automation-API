import { assert } from "chai";
import { expect } from "chai";
import bookerApi from '$root/page/booker.api';
import * as data from '$root/data/booking.data';

describe('Bookings Details', function() {
    
    it('Success of Get Booking Data', async () => {
        const response = await bookerApi.get_booking();
        assert.equal(response.status, 200);
        console.log(response.data);
    });

    it('Success Create Booking Data', async () => {
        const response = await bookerApi.create_booking(data.CREATE_BOOKING);
        assert.equal(response.status, 200);
        var firstname = 'Elvanisa';
        assert.exists(firstname, 'Elvanisa');
        console.log(response.data);
        assert.hasAnyKeys(response.data, ["bookingid"])
        assert.isNumber(response.data.bookingid);
    });
});