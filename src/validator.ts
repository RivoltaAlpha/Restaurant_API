import { z } from 'zod';

export const userSchema = z.object({
    name: z.string(),
    contact_phone: z.string(),
    phone_verified: z.boolean(),
    email: z.string().email(),
    email_verified: z.boolean(),
    confirmation_code: z.string(),
});

export const restaurantSchema = z.object({
    name: z.string(),
    street_address: z.string(),
    zip_code: z.string(),
    city_id: z.number(),
});

export const citySchema = z.object({
    name: z.string(),
    state_id: z.number(),
});

export const stateSchema = z.object({
    name: z.string(),
    code: z.string(),
});

export const orderSchema = z.object({
    restaurant_id: z.number().int().positive("Restaurant ID is required"),
    estimated_delivery_time: z.string().min(1, "Estimated delivery time is required"),
    actual_delivery_time: z.string().optional(),
    delivery_address_id: z.number().int().positive("Delivery address ID is required"),
    user_id: z.number().int().positive("User ID is required"),
    driver_id: z.number().int().positive("Driver ID is required"),
    price: z.number().positive("Price is required"),
    discount: z.number().positive("Discount is required"),
    final_price: z.number().positive("Final price is required"),
    comment: z.string().optional(),
  });