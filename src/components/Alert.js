import React from 'react';

export default function Alert(props) {
    const capitalize = (text)=>
    {
        let typetext = text.toLowerCase();
        return typetext.charAt(0).toUpperCase()+typetext.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
      {
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>{props.alert.message}
  </div>}
</div>
    
  );
}
