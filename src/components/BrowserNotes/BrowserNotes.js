import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span>Vous ne pourrez utiliser toute la puissance de ce portfolio uniquement qu'avec <b>Chrome!</b></span>
      </Browser>
      <Browser only firefox>
        <span>Magic background n'est pas disponible pour FireFox. Essayer avec <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;
