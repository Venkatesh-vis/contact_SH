// import React, { useEffect, useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
// import Btn from './button';

// const ContactForm = ({ open, handleClose, addContact, editContact, currentContact }) => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');

  
//   useEffect(() => {
//     if (currentContact) {
//       setName(currentContact.name);
//       setMobile(currentContact.mobile);
//       setEmail(currentContact.email);
//     } else {
//       setName('');
//       setMobile('');
//       setEmail('');
//     }
//   }, [currentContact, open]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contact = { name, mobile, email };
//     if (currentContact) {
//       editContact(contact);
//     } else {
//       addContact(contact);
//     }
//     handleClose();
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>{currentContact ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
//       <DialogContent>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Mobile No"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <DialogActions>
//             <Button type="submit" color="primary">
//               {currentContact ? 'Update' : 'Add'}
//             </Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ContactForm;



import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Btn from './button';

const ContactForm = ({ open, handleClose, addContact, editContact, currentContact }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setMobile(currentContact.mobile);
      setEmail(currentContact.email);
    } else {
      setName('');
      setMobile('');
      setEmail('');
    }
  }, [currentContact, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, mobile, email };
    if (currentContact) {
      editContact(contact);
    } else {
      addContact(contact);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{currentContact ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
          <TextField label="Mobile No" value={mobile} onChange={(e) => setMobile(e.target.value)} fullWidth margin="normal" required />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
          <DialogActions>
            <Btn 
              name={currentContact ? 'Update' : 'Add'} 
              onClick={handleSubmit} 
              style={{ backgroundColor: '#42A5F5', borderRadius: '20px', cursor: 'pointer', height:'50px', width:'80px', fontWeight:'bold' }} 
            />
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
