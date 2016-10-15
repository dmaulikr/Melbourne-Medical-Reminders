import React from 'react';

export default class PatientStub extends React.Component {
  render() {
    var patient = this.props.patient;
    return (
      <div className='patient-stub row'>
        <div className='patient-photo col-xs-3 col-md-1'>
          <img src={patient.photo} />
        </div>
        <div className='col-xs-9 col-md-11'>
          <dl className='dl-horizontal'>
            <dt>Name</dt>
            <dd>{patient.name}</dd>
            <dt>Ph no.</dt>
            <dd>{patient.phone_no}</dd>
            <dt>Permissions</dt>
            <dd>
              {
                patient.permissions.map((p) => {
                  return p.content
                }).join(', ')
              }
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}