import React from 'react';
import '../../Settings.scss';
const LimitAndUsage = () => {
    const usageData = {
        contactsCreated: { value: 3435, max: 5000 },
        commandsCreated: { value: 2, max: 5 },
        customAttributesCreated: { value: 0, max: 'Unlimited' },
        member: { value: 0, max: 0 },
        storage: { value: '1 Gb', max: '3 Gb' },
        transcriptMinutes: { value: '50 Mins', max: '120 Mins' },
      };
    
      const renderBar = (value, max) => {
        const percentage = typeof max === 'number' ? (value / max) * 100 : 0;
        return (
          <div className="bar-container">
            <div className="bar" style={{ width: `${percentage}%` }}></div>
          </div>
        );
      };
  return (
    <div>
       <div className="usage-display">
      <div className="usage-item1">
        <span>Contacts Created</span>
        <span>{`${usageData.contactsCreated.value} / ${usageData.contactsCreated.max}`}</span>
        {renderBar(usageData.contactsCreated.value, usageData.contactsCreated.max)}
      </div>
      <div className="usage-item2">
        <span>Commands Created</span>
        <span>{`${usageData.commandsCreated.value} / ${usageData.commandsCreated.max}`}</span>
        {renderBar(usageData.commandsCreated.value, usageData.commandsCreated.max)}
      </div>
      <div className="usage-item3">
        <span>Custom Attributes Created</span>
        <span>{`${usageData.customAttributesCreated.value} / ${usageData.customAttributesCreated.max}`}</span>
        {renderBar(usageData.customAttributesCreated.value, Infinity)}
      </div>
      <div className="usage-item4">
        <span>Member</span>
        <span>{`${usageData.member.value} / ${usageData.member.max}`}</span>
        {renderBar(usageData.member.value, usageData.member.max)}
      </div>
      <div className="usage-item5">
        <span>Storage</span>
        <span>{`${usageData.storage.value} / ${usageData.storage.max}`}</span>
        {renderBar(parseInt(usageData.storage.value), parseInt(usageData.storage.max))}
      </div>
      <div className="usage-item6">
        <span>Transcript minutes</span>
        <span>{`${usageData.transcriptMinutes.value} / ${usageData.transcriptMinutes.max}`}</span>
        {renderBar(parseInt(usageData.transcriptMinutes.value), parseInt(usageData.transcriptMinutes.max))}
      </div>
    </div>
    </div>
  )
}

export default LimitAndUsage
