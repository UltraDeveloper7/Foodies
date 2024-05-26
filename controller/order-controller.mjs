// controller/order-controller.mjs

import { insertOrder, insertOrderContent, getMenuItemIdByName,  insertPayment } from '../model/model.mjs';

export const submitOrder = async (req, res) => {
    const { userEmail, storeId, deliveryAddress, orderPrice, tip, items, method, paymentAmount } = req.body;

    try {
        const orderId = insertOrder(userEmail, storeId, deliveryAddress, orderPrice, tip);

        for (const item of items) {
            const menuItemId = getMenuItemIdByName(item.name);
            insertOrderContent(orderId, menuItemId, item.comment);
        }

        // Insert payment details
        insertPayment(orderId, userEmail, paymentAmount, method);        

        res.status(200).json({ message: 'Order and payment submitted successfully' });
    } catch (error) {
        console.error('Error submitting order:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
