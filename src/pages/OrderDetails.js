// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const OrderDetails = () => {
//     const [order, setOrder] = useState({
//         items: '',
//         name: '',
//         contactNumber: '',
//         address: '',
//         landmark: '',
//         deliveryTime: '',
//         instructions: '',
//         paymentMethod: '',
//         contactMethod: '',
//         feedback: '',
//     });
//     const [orders, setOrders] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const res = await axios.get('http://localhost:5000/api/orders', {
//                     headers: {
//                         'x-auth-token': localStorage.getItem('token'),
//                     },
//                 });
//                 setOrders(res.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         fetchOrders();
//     }, []);

//     const handleChange = (e) => {
//         setOrder({ ...order, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/orders', order, {
//                 headers: {
//                     'x-auth-token': localStorage.getItem('token'),
//                 },
//             });
//             alert('Order submitted successfully!');
//             setOrder({
//                 items: '',
//                 name: '',
//                 contactNumber: '',
//                 address: '',
//                 landmark: '',
//                 deliveryTime: '',
//                 instructions: '',
//                 paymentMethod: '',
//                 contactMethod: '',
//                 feedback: '',
//             });
//             const res = await axios.get('http://localhost:5000/api/orders', {
//                 headers: {
//                     'x-auth-token': localStorage.getItem('token'),
//                 },
//             });
//             setOrders(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h1>Order Details</h1>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 <label style={styles.label}>Items:</label>
//                 <input
//                     type="text"
//                     name="items"
//                     value={order.items}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Full Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={order.name}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Contact Number:</label>
//                 <input
//                     type="text"
//                     name="contactNumber"
//                     value={order.contactNumber}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Delivery Address:</label>
//                 <input
//                     type="text"
//                     name="address"
//                     value={order.address}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Landmark:</label>
//                 <input
//                     type="text"
//                     name="landmark"
//                     value={order.landmark}
//                     onChange={handleChange}
//                     style={styles.input}
//                 />
//                 <label style={styles.label}>Preferred Delivery Time:</label>
//                 <input
//                     type="text"
//                     name="deliveryTime"
//                     value={order.deliveryTime}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Special Instructions:</label>
//                 <input
//                     type="text"
//                     name="instructions"
//                     value={order.instructions}
//                     onChange={handleChange}
//                     style={styles.input}
//                 />
//                 <label style={styles.label}>Payment Method:</label>
//                 <input
//                     type="text"
//                     name="paymentMethod"
//                     value={order.paymentMethod}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Preferred Contact Method:</label>
//                 <input
//                     type="text"
//                     name="contactMethod"
//                     value={order.contactMethod}
//                     onChange={handleChange}
//                     style={styles.input}
//                     required
//                 />
//                 <label style={styles.label}>Feedback:</label>
//                 <input
//                     type="text"
//                     name="feedback"
//                     value={order.feedback}
//                     onChange={handleChange}
//                     style={styles.input}
//                 />
//                 <button type="submit" style={styles.button}>Submit Order</button>
//             </form>
//             <h2>Saved Orders</h2>
//             <div style={styles.ordersContainer}>
//                 {orders.length > 0 ? (
//                     <ul style={styles.ordersList}>
//                         {orders.map((ord) => (
//                             <li key={ord._id} style={styles.orderItem}>
//                                 <p><strong>Items:</strong> {ord.items}</p>
//                                 <p><strong>Name:</strong> {ord.name}</p>
//                                 <p><strong>Contact Number:</strong> {ord.contactNumber}</p>
//                                 <p><strong>Address:</strong> {ord.address}</p>
//                                 <p><strong>Landmark:</strong> {ord.landmark}</p>
//                                 <p><strong>Delivery Time:</strong> {ord.deliveryTime}</p>
//                                 <p><strong>Instructions:</strong> {ord.instructions}</p>
//                                 <p><strong>Payment Method:</strong> {ord.paymentMethod}</p>
//                                 <p><strong>Contact Method:</strong> {ord.contactMethod}</p>
//                                 <p><strong>Feedback:</strong> {ord.feedback}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No orders found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         textAlign: 'center',
//         marginTop: '50px',
//     },
//     form: {
//         display: 'grid',
//         gap: '1rem',
//         maxWidth: '600px',
//         margin: '0 auto',
//         textAlign: 'left',
//     },
//     label: {
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '100%',
//         padding: '8px',
//         boxSizing: 'border-box',
//     },
//     button: {
//         padding: '10px 20px',
//         backgroundColor: '#007BFF',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     },
//     ordersContainer: {
//         maxWidth: '600px',
//         margin: '20px auto',
//         textAlign: 'left',
//     },
//     ordersList: {
//         listStyleType: 'none',
//         padding: '0',
//     },
//     orderItem: {
//         borderBottom: '1px solid #ccc',
//         padding: '1rem',
//     },
// };

// export default OrderDetails;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrderDetails = () => {
//     const [order, setOrder] = useState({
//         items: '',
//         name: '',
//         contactNumber: '',
//         address: '',
//         landmark: '',
//         deliveryTime: '',
//         instructions: '',
//         paymentMethod: '',
//         contactMethod: '',
//         feedback: '',
//     });
//     const [orders, setOrders] = useState([]);

//     const handleChange = (e) => {
//         setOrder({ ...order, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/orders', order, {
//                 headers: {
//                     'x-auth-token': localStorage.getItem('token'),
//                 },
//             });
//             alert('Order submitted successfully!');
//             setOrder({
//                 items: '',
//                 name: '',
//                 contactNumber: '',
//                 address: '',
//                 landmark: '',
//                 deliveryTime: '',
//                 instructions: '',
//                 paymentMethod: '',
//                 contactMethod: '',
//                 feedback: '',
//             });
//             fetchOrders();
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const fetchOrders = async () => {
//         try {
//             const res = await axios.get('http://localhost:5000/api/orders');
//             setOrders(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     return (
//         <div style={styles.container}>
//             <h1>Order Details</h1>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 <label>Items:</label>
//                 <input type="text" name="items" value={order.items} onChange={handleChange} required />
//                 <label>Full Name:</label>
//                 <input type="text" name="name" value={order.name} onChange={handleChange} required />
//                 <label>Contact Number:</label>
//                 <input type="text" name="contactNumber" value={order.contactNumber} onChange={handleChange} required />
//                 <label>Delivery Address:</label>
//                 <input type="text" name="address" value={order.address} onChange={handleChange} required />
//                 <label>Landmark:</label>
//                 <input type="text" name="landmark" value={order.landmark} onChange={handleChange} />
//                 <label>Preferred Delivery Time:</label>
//                 <input type="text" name="deliveryTime" value={order.deliveryTime} onChange={handleChange} required />
//                 <label>Special Instructions:</label>
//                 <input type="text" name="instructions" value={order.instructions} onChange={handleChange} />
//                 <label>Payment Method:</label>
//                 <input type="text" name="paymentMethod" value={order.paymentMethod} onChange={handleChange} required />
//                 <label>Preferred Contact Method:</label>
//                 <input type="text" name="contactMethod" value={order.contactMethod} onChange={handleChange} required />
//                 <label>Feedback:</label>
//                 <input type="text" name="feedback" value={order.feedback} onChange={handleChange} />
//                 <button type="submit">Submit Order</button>
//             </form>
//             <h2>Submitted Orders</h2>
//             <ul style={styles.orderList}>
//                 {orders.map((o) => (
//                     <li key={o._id} style={styles.orderItem}>
//                         <p><strong>Items:</strong> {o.items}</p>
//                         <p><strong>Name:</strong> {o.name}</p>
//                         <p><strong>Contact Number:</strong> {o.contactNumber}</p>
//                         <p><strong>Address:</strong> {o.address}</p>
//                         <p><strong>Landmark:</strong> {o.landmark}</p>
//                         <p><strong>Delivery Time:</strong> {o.deliveryTime}</p>
//                         <p><strong>Instructions:</strong> {o.instructions}</p>
//                         <p><strong>Payment Method:</strong> {o.paymentMethod}</p>
//                         <p><strong>Contact Method:</strong> {o.contactMethod}</p>
//                         <p><strong>Feedback:</strong> {o.feedback}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         textAlign: 'center',
//         marginTop: '50px',
//     },
//     form: {
//         display: 'inline-block',
//         textAlign: 'left',
//     },
//     orderList: {
//         listStyleType: 'none',
//         paddingLeft: 0,
//     },
//     orderItem: {
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         padding: '10px',
//         margin: '10px 0',
//     },
// };

// export default OrderDetails;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrderDetails = () => {
//     const [order, setOrder] = useState({
//         items: '',
//         name: '',
//         contactNumber: '',
//         address: '',
//         landmark: '',
//         deliveryTime: '',
//         instructions: '',
//         paymentMethod: '',
//         contactMethod: '',
//         feedback: '',
//     });
//     const [orders, setOrders] = useState([]);

//     const handleChange = (e) => {
//         setOrder({ ...order, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/orders', order, {
//                 headers: {
//                     'x-auth-token': localStorage.getItem('token'),
//                 },
//             });
//             alert('Order submitted successfully!');
//             setOrder({
//                 items: '',
//                 name: '',
//                 contactNumber: '',
//                 address: '',
//                 landmark: '',
//                 deliveryTime: '',
//                 instructions: '',
//                 paymentMethod: '',
//                 contactMethod: '',
//                 feedback: '',
//             });
//             fetchOrders();
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const fetchOrders = async () => {
//         try {
//             const res = await axios.get('http://localhost:5000/api/orders');
//             setOrders(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     return (
//         <div style={styles.container}>
//             <h1>Order Details</h1>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 <div style={styles.formGroup}>
//                     <label>Items:</label>
//                     <input type="text" name="items" value={order.items} onChange={handleChange} required />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Full Name:</label>
//                     <input type="text" name="name" value={order.name} onChange={handleChange} required />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Contact Number:</label>
//                     <input type="text" name="contactNumber" value={order.contactNumber} onChange={handleChange} required />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Delivery Address:</label>
//                     <input type="text" name="address" value={order.address} onChange={handleChange} required />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Landmark:</label>
//                     <input type="text" name="landmark" value={order.landmark} onChange={handleChange} />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Preferred Delivery Time:</label>
//                     <input type="text" name="deliveryTime" value={order.deliveryTime} onChange={handleChange} required />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Special Instructions:</label>
//                     <textarea name="instructions" value={order.instructions} onChange={handleChange} rows="3"></textarea>
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Payment Method:</label>
//                     <input type="text" name="paymentMethod" value={order.paymentMethod} onChange={handleChange} required />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Preferred Contact Method:</label>
//                     <select name="contactMethod" value={order.contactMethod} onChange={handleChange} required>
//                         <option value="">Select Contact Method</option>
//                         <option value="email">Email</option>
//                         <option value="phone">Phone</option>
//                     </select>
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label>Feedback:</label>
//                     <textarea name="feedback" value={order.feedback} onChange={handleChange} rows="3"></textarea>
//                 </div>
//                 <button type="submit" style={styles.submitButton}>Submit Order</button>
//             </form>

//             <div style={styles.orderContainer}>
//                 <h2>Submitted Orders</h2>
//                 <ul style={styles.orderList}>
//                     {orders.map((o) => (
//                         <li key={o._id} style={styles.orderItem}>
//                             <p><strong>Items:</strong> {o.items}</p>
//                             <p><strong>Name:</strong> {o.name}</p>
//                             <p><strong>Contact Number:</strong> {o.contactNumber}</p>
//                             <p><strong>Address:</strong> {o.address}</p>
//                             <p><strong>Landmark:</strong> {o.landmark}</p>
//                             <p><strong>Delivery Time:</strong> {o.deliveryTime}</p>
//                             <p><strong>Instructions:</strong> {o.instructions}</p>
//                             <p><strong>Payment Method:</strong> {o.paymentMethod}</p>
//                             <p><strong>Contact Method:</strong> {o.contactMethod}</p>
//                             <p><strong>Feedback:</strong> {o.feedback}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         textAlign: 'center',
//         marginTop: '50px',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         maxWidth: '600px',
//         margin: 'auto',
//     },
//     formGroup: {
//         marginBottom: '15px',
//         width: '100%',
//         textAlign: 'left',
//     },
//     submitButton: {
//         padding: '10px 20px',
//         backgroundColor: '#007BFF',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//         marginTop: '20px',
//     },
//     orderContainer: {
//         marginTop: '50px',
//     },
//     orderList: {
//         listStyleType: 'none',
//         padding: 0,
//         margin: 0,
//     },
//     orderItem: {
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         padding: '10px',
//         marginBottom: '10px',
//         textAlign: 'left',
//     },
// };

// export default OrderDetails;



// import React, { useState } from 'react';
// import axios from 'axios';

// const OrderDetails = () => {
//     const [order, setOrder] = useState({
//         items: '',
//         name: '',
//         contactNumber: '',
//         address: '',
//         landmark: '',
//         deliveryTime: '',
//         instructions: '',
//         paymentMethod: '',
//         contactMethod: '',
//         feedback: '',
//     });

//     const [currentStep, setCurrentStep] = useState(1);

//     const handleChange = (e) => {
//         setOrder({ ...order, [e.target.name]: e.target.value });
//     };

//     const handleNextStep = () => {
//         setCurrentStep(currentStep + 1);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/orders', order, {
//                 headers: {
//                     'x-auth-token': localStorage.getItem('token'),
//                 },
//             });
//             alert('Order submitted successfully!');
//             setOrder({
//                 items: '',
//                 name: '',
//                 contactNumber: '',
//                 address: '',
//                 landmark: '',
//                 deliveryTime: '',
//                 instructions: '',
//                 paymentMethod: '',
//                 contactMethod: '',
//                 feedback: '',
//             });
//             setCurrentStep(1); // Reset to first step after submission
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const steps = [
//         {
//             question: 'What items would you like to order?',
//             inputType: 'text',
//             name: 'items',
//         },
//         {
//             question: 'Please enter your full name:',
//             inputType: 'text',
//             name: 'name',
//         },
//         {
//             question: 'What is your contact number?',
//             inputType: 'text',
//             name: 'contactNumber',
//         },
//         {
//             question: 'What is your delivery address?',
//             inputType: 'text',
//             name: 'address',
//         },
//         {
//             question: 'Any landmark near your address? (Optional)',
//             inputType: 'text',
//             name: 'landmark',
//         },
//         {
//             question: 'Preferred delivery time?',
//             inputType: 'text',
//             name: 'deliveryTime',
//         },
//         {
//             question: 'Any special instructions for the delivery?',
//             inputType: 'textarea',
//             name: 'instructions',
//         },
//         {
//             question: 'Preferred payment method?',
//             inputType: 'text',
//             name: 'paymentMethod',
//         },
//         {
//             question: 'Preferred contact method (email/phone)?',
//             inputType: 'text',
//             name: 'contactMethod',
//         },
//         {
//             question: 'Any feedback or additional notes? (Optional)',
//             inputType: 'textarea',
//             name: 'feedback',
//         },
//     ];

//     const currentStepData = steps[currentStep - 1];

//     return (
//         <div style={styles.container}>
//             <h1>Order Details</h1>
//             <form onSubmit={currentStep === steps.length ? handleSubmit : handleNextStep} style={styles.form}>
//                 <div style={styles.formGroup}>
//                     <label>{currentStepData.question}</label>
//                     {currentStepData.inputType === 'textarea' ? (
//                         <textarea name={currentStepData.name} value={order[currentStepData.name]} onChange={handleChange} rows="3" required={currentStepData.required}></textarea>
//                     ) : (
//                         <input type={currentStepData.inputType} name={currentStepData.name} value={order[currentStepData.name]} onChange={handleChange} required={currentStepData.required} />
//                     )}
//                 </div>
//                 {currentStep < steps.length ? (
//                     <button type="button" onClick={handleNextStep}>Next</button>
//                 ) : (
//                     <button type="submit">Submit Order</button>
//                 )}
//             </form>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         textAlign: 'center',
//         marginTop: '50px',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         maxWidth: '600px',
//         margin: 'auto',
//     },
//     formGroup: {
//         marginBottom: '20px',
//         width: '100%',
//         textAlign: 'left',
//     },
// };

// export default OrderDetails;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = () => {
    const [order, setOrder] = useState({
        items: '',
        name: '',
        contactNumber: '',
        address: '',
        landmark: '',
        deliveryTime: '',
        instructions: '',
        paymentMethod: '',
        contactMethod: '',
        feedback: '',
    });

    const [orders, setOrders] = useState([]);
    const [submittedOrder, setSubmittedOrder] = useState(null); // Track the last submitted order

    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/orders', order, {
                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
            alert('Order submitted successfully!');
            setOrder({
                items: '',
                name: '',
                contactNumber: '',
                address: '',
                landmark: '',
                deliveryTime: '',
                instructions: '',
                paymentMethod: '',
                contactMethod: '',
                feedback: '',
            });
            setSubmittedOrder(response.data); // Update state with the submitted order
            fetchOrders(); // Refresh the list of orders
            setCurrentStep(1); // Reset to first step after submission
        } catch (err) {
            console.error(err);
        }
    };

    const fetchOrders = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/orders');
            setOrders(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const steps = [
        {
            question: 'What items would you like to order?',
            inputType: 'text',
            name: 'items',
        },
        {
            question: 'Please enter your full name:',
            inputType: 'text',
            name: 'name',
        },
        {
            question: 'What is your contact number?',
            inputType: 'text',
            name: 'contactNumber',
        },
        {
            question: 'What is your delivery address?',
            inputType: 'text',
            name: 'address',
        },
        {
            question: 'Any landmark near your address? (Optional)',
            inputType: 'text',
            name: 'landmark',
        },
        {
            question: 'Preferred delivery time?',
            inputType: 'text',
            name: 'deliveryTime',
        },
        {
            question: 'Any special instructions for the delivery?',
            inputType: 'textarea',
            name: 'instructions',
        },
        {
            question: 'Preferred payment method?',
            inputType: 'text',
            name: 'paymentMethod',
        },
        {
            question: 'Preferred contact method (email/phone)?',
            inputType: 'text',
            name: 'contactMethod',
        },
        {
            question: 'Any feedback or additional notes? (Optional)',
            inputType: 'textarea',
            name: 'feedback',
        },
    ];

    const currentStepData = steps[currentStep - 1];

    return (
        <div style={styles.container}>
            <h1>Order Details</h1>
            {submittedOrder && (
                <div style={styles.submittedOrder}>
                    <h2>Submitted Order</h2>
                    <p><strong>Items:</strong> {submittedOrder.items}</p>
                    <p><strong>Name:</strong> {submittedOrder.name}</p>
                    <p><strong>Contact Number:</strong> {submittedOrder.contactNumber}</p>
                    <p><strong>Address:</strong> {submittedOrder.address}</p>
                    <p><strong>Landmark:</strong> {submittedOrder.landmark}</p>
                    <p><strong>Delivery Time:</strong> {submittedOrder.deliveryTime}</p>
                    <p><strong>Instructions:</strong> {submittedOrder.instructions}</p>
                    <p><strong>Payment Method:</strong> {submittedOrder.paymentMethod}</p>
                    <p><strong>Contact Method:</strong> {submittedOrder.contactMethod}</p>
                    <p><strong>Feedback:</strong> {submittedOrder.feedback}</p>
                </div>
            )}
            <form onSubmit={currentStep === steps.length ? handleSubmit : handleNextStep} style={styles.form}>
                <div style={styles.formGroup}>
                    <label>{currentStepData.question}</label>
                    {currentStepData.inputType === 'textarea' ? (
                        <textarea name={currentStepData.name} value={order[currentStepData.name]} onChange={handleChange} rows="3" required={currentStepData.required}></textarea>
                    ) : (
                        <input type={currentStepData.inputType} name={currentStepData.name} value={order[currentStepData.name]} onChange={handleChange} required={currentStepData.required} />
                    )}
                </div>
                {currentStep < steps.length ? (
                    <button type="button" onClick={handleNextStep}>Next</button>
                ) : (
                    <button type="submit">Submit Order</button>
                )}
            </form>
            <h2>Submitted Orders</h2>
            <ul style={styles.orderList}>
                {orders.map((o) => (
                    <li key={o._id} style={styles.orderItem}>
                        <p><strong>Items:</strong> {o.items}</p>
                        <p><strong>Name:</strong> {o.name}</p>
                        <p><strong>Contact Number:</strong> {o.contactNumber}</p>
                        <p><strong>Address:</strong> {o.address}</p>
                        <p><strong>Landmark:</strong> {o.landmark}</p>
                        <p><strong>Delivery Time:</strong> {o.deliveryTime}</p>
                        <p><strong>Instructions:</strong> {o.instructions}</p>
                        <p><strong>Payment Method:</strong> {o.paymentMethod}</p>
                        <p><strong>Contact Method:</strong> {o.contactMethod}</p>
                        <p><strong>Feedback:</strong> {o.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        margin: 'auto',
    },
    formGroup: {
        marginBottom: '20px',
        width: '100%',
        textAlign: 'left',
    },
    submittedOrder: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px 0',
    },
    orderList: {
        listStyleType: 'none',
        paddingLeft: 0,
    },
    orderItem: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px 0',
    },
};

export default OrderDetails;
