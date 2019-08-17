import React from 'react';
import First from './First';
/*
There are many ways to handle the global application state. Like Redux , Mobx

Redux : state , store , connect , mapStateToProps , mapDisptachToProps etc

2019 : Context Api
Since 16.3.0 it is effective and ready to use in production.

Provider use to provide the value
Consumer ussed to acces the value of context
*/

class Home extends React.Component{

render(){
  return (
    <div>
<First />
    </div>
  )
}

}

export default Home;