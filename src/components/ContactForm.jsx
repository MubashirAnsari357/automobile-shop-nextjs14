import React from "react";
import { AddIcon } from "./icons";
import { updateContact } from "@/lib/Actions/actions";

const ContactForm = ({ edit, contact, id }) => {
  const handleEdit = updateContact.bind(null, id);
  return (
    <form action={handleEdit} className="p-4 md:p-5">
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="shopname" className="formLabel">
            Shop Name
          </label>
          <input
            type="text"
            name="shopname"
            id="shopname"
            defaultValue={contact?.shop_name || ''}
            className="formInput"
            placeholder="Shop name"
            required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="shop_description" className="formLabel">
            Shop Description
          </label>
          <textarea
            id="shop_description"
            name="shop_description"
            rows={3}
            className="formInput"
            placeholder="Write shop description here"
            defaultValue={contact?.shop_description || ''}
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="mobile" className="formLabel">
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            defaultValue={contact?.phone[0] || ''}
            className="formInput"
            placeholder="Mobile number"
            minLength={'10'}
            maxLength={'10'}
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="mobile2" className="formLabel">
            Mobile 2
          </label>
          <input
            type="tel"
            name="mobile2"
            id="mobile2"
            defaultValue={contact?.phone[1] || ''}
            className="formInput"
            placeholder="Mobile number (Optional)"
            minLength={'10'}
            maxLength={'10'}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="whatsapp" className="formLabel">
            Whatsapp No.
          </label>
          <input
            type="tel"
            name="whatsapp"
            id="whatsapp"
            defaultValue={contact?.whatsapp[0] || ''}
            className="formInput"
            placeholder="Whatsapp number"
            minLength={'10'}
            maxLength={'10'}
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="whatsapp2" className="formLabel">
            Whatsapp No. 2
          </label>
          <input
            type="tel"
            name="whatsapp2"
            id="whatsapp2"
            defaultValue={contact?.whatsapp[1] || ''}
            className="formInput"
            placeholder="Whatsapp number (Optional)"
            minLength={'10'}
            maxLength={'10'}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="address" className="formLabel">
            Shop Address
          </label>
          <textarea
            name="address"
            id="address"
            rows={"2"}
            defaultValue={contact?.address || ''}
            className="formInput"
            placeholder="Shop Address"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={contact?.email || ''}
            className="formInput"
            placeholder="Email address"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="twitter" className="formLabel">
            X
          </label>
          <input
            type="url"
            name="twitter"
            id="twitter"
            defaultValue={contact?.social?.twitter || ''}
            className="formInput"
            placeholder="X Profile (Twitter)"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="facebook" className="formLabel">
            Facebook
          </label>
          <input
            type="url"
            name="facebook"
            id="facebook"
            defaultValue={contact?.social?.facebook || ''}
            className="formInput"
            placeholder="Facebook Profile"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="instagram" className="formLabel">
            Instagram
          </label>
          <input
            type="url"
            name="instagram"
            id="instagram"
            defaultValue={contact?.social?.instagram || ''}
            className="formInput"
            placeholder="Instagram Profile"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="map" className="formLabel">
            Map URL
          </label>
          <input
            type="url"
            name="map"
            id="map"
            defaultValue={contact?.map || ''}
            className="formInput"
            placeholder="Map URL"
            required
          />
        </div>
      </div>
      <button type="submit" className="primary-btn w-full">
        <AddIcon className="me-1 -ms-1 w-5 h-5" />
        Update Contact
      </button>
    </form>
  );
};

export default ContactForm;
