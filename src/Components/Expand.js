import React, { useState } from 'react';
import { IconButton, Collapse, Typography, Box } from '@mui/material';
import { ExpandMore, ExpandLess, Close } from '@mui/icons-material';

function ExpandableContent() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <IconButton onClick={handleToggle}>
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </IconButton>

      <Collapse in={expanded}>
       
        
          <p className='subcontent'>
          I agree to the <span className='h-text'>Offer Terms</span> and understand I am creating a Sharecare account. I agree to the Sharecare<span className='h-text'> Privacy Policy, Terms,</span> and, if applicable to me, the Privacy Notice for California Residents. I consent to Sharecare’s processing of any health information I may provide, for the purposes listed in the Privacy Policy. I agree to receive emails, offers, alerts, and other notices. I understand that I can opt-out of marketing communications at any time.
          </p>
      
      </Collapse>
    </Box>
  );
}

export default ExpandableContent;
