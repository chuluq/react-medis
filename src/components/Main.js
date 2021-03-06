import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfileSetting from './ProfileSetting'
import Menu from './menus/Menu'
import UserManagement from './user/UserManagement'
import PatientViewLogic from './patient/PatientViewLogic'
import AddPatientLogic from './patient/AddPatientLogic'
import EditPatientLogic from './patient/EditPatientLogic'
import GetPatient from './patient/GetPatient'
import DeletePatient from './patient/DeletePatient'
import Practitioner from './practitioner/Practitioner'
import PractitionerView from './practitioner/PractitionerView'
import AddPractitioner from './practitioner/AddPractitioner'
import NotFound from './NotFound';

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ProfileSetting} />
        <Route path='/menu' component={Menu} />
        <Route path='/user' component={UserManagement} />
        <Route path='/patient' component={GetPatient} />
        <Route path="/patient-view/:id" component={PatientViewLogic} />
        <Route path='/patient-add' component={AddPatientLogic} />
        <Route path='/patient-edit/:id' component={EditPatientLogic} />
        <Route path='/patient-delete/:id' component={DeletePatient} />
        <Route path='/practitioner' component={Practitioner} />
        <Route path='/practitioner-view' component={PractitionerView} />
        <Route path='/practitioner-add' component={AddPractitioner} />
        <Route component={NotFound} />
      </Switch>    
    </div>
  )
}

export default Main