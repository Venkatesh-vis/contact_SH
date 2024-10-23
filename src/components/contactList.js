// import React from 'react';
// import { Card, IconButton } from '@mui/material';
// import { Call, DeleteRounded, EditRounded } from '@mui/icons-material';
// import styles from './contactList.module.css';
// import Btn from './button';

// const ContactList = ({ contacts, deleteContact, setCurrentContact }) => {
//   return (
//     <>
//       {contacts.length === 0 ? (
//         <h3 style={{textAlign:'center'}}>No contacts</h3>
//       ) : (
//         <div className={styles.contactList}>
//           {contacts.map((contact, index) => (
//             <Card
//               style={{
//                 width: '100%',
//                 minHeight: '60px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 padding: '10px',
//               }}
//             >
//               <div className={styles.con}>
//                 <div className={styles.btn}>
//                   <IconButton onClick={() => setCurrentContact(contact, index)}>
//                     <EditRounded />
//                   </IconButton>
//                   {/*<Btn name={"Edit"} onClick={setCurrentContact(contact)} icon={EditRounded} style={{backgroundColor:'#42A5F5',borderRadius:'20px',cursor:'pointer'}} /> */}
//                   <IconButton onClick={() => deleteContact(index)}>
//                     <DeleteRounded />
//                   </IconButton>
//                 </div>
//                 <div className={styles.data}>
//                   <div className={styles.size}>
//                     <h2>{contact.name}</h2>
//                   </div>
//                   <div className={styles.size}>
//                     <p>{contact.email}</p>
//                   </div>
//                   <div className={styles.size}>
//                     <p>{contact.mobile}</p>
//                   </div>
//                 </div>
//               </div>
//               <IconButton>
//                 <Call />
//               </IconButton>
//             </Card>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default ContactList;




import React from 'react';
import { Card, IconButton } from '@mui/material';
import { Call, DeleteRounded, EditRounded } from '@mui/icons-material';
import styles from './contactList.module.css';
import Btn from './button';

const ContactList = ({ contacts, deleteContact, setCurrentContact }) => {
  return (
    <>
      {contacts.length === 0 ? (
        <h3 style={{ textAlign: 'center' }}>No contacts</h3>
      ) : (
        <div className={styles.contactList}>
          {contacts.map((contact, index) => (
            <Card
              key={index}
              style={{
                width: '100%',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <div className={styles.con}>
               
                <div className={styles.data}>
                  <div className={styles.size}>
                    <h2>{contact.name}</h2>
                  </div>
                  <div className={styles.size}>
                    <p>{contact.email}</p>
                  </div>
                  <div className={styles.size}>
                    <p>{contact.mobile}</p>
                  </div>
                </div>
                
              </div>
              
              <IconButton style={{marginRight:'20px'}}>
                <Call />
              </IconButton>
              <div className={styles.btn}>
                  <Btn 
                    name="Edit" 
                    onClick={() => setCurrentContact(contact, index)} 
                    icon={EditRounded} 
                    style={{ borderRadius: '20px', cursor: 'pointer', backgroundColor:'#FFF3CD', width:'100px', fontWeight:'bold' }} 
                  />
                  <Btn 
                    name="Delete" 
                    onClick={() => deleteContact(index)} 
                    icon={DeleteRounded} 
                    style={{ borderRadius: '20px', cursor: 'pointer', backgroundColor:'#F8D7DA', width:'100px', fontWeight:'bold' }} 
                  />
                </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default ContactList;
