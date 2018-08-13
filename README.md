# Math Game

### Master

[![Build Status](https://travis-ci.com/MS-React/react-base.svg?branch=master)](https://travis-ci.com/MS-React/react-base)

# Rematch FW

Rematch is a State Manager Framework based on Redux. Its main intent is to remove all the boilerplate that comes from Redux standard implementation by providing a simpler API based on configuration over composition.

# Purpose and differences with Redux

Rematch builds upon Redux by reducing boilerplate and enforcing best practices.

To clarify, Rematch removes the need for:

 - declared action types
 - action creators
 - thunks
 - store configuration
 - mapDispatchToProps
 - sagas

## Rematch example 

### *1. model*
```javascript
import { init } from '@rematch/core'

const count = {
  state: 0,
  reducers: {
    upBy: (state, payload) => state + payload
  }
}

init({
  models: { count }
})
```

### *2. View*
```javascript
import { connect } from 'react-redux'

// Component

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  countUpBy: dispatch.count.upBy
})

connect(mapStateToProps, mapDispatchToProps)(Component)
```

## Redux (best practices)

### *1. Store*
```javascript
import { createStore, combineReducers } from 'redux'
// devtools, reducers, middleware, etc.
export default createStore(reducers, initialState, enhancers)
```

### *2. Action Type*
```javascript
export const COUNT_UP_BY = 'COUNT_UP_BY'
```

### *3. Action Creator*
```javascript
import { COUNT_UP_BY } from '../types/counter'

export const countUpBy = (value) => ({
  type: COUNT_UP_BY,
  payload: value,
})
```

### *4. Reducer*
```javascript
import { COUNT_UP_BY } from '../types/counter'

const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNT_UP_BY:
      return state + action.payload
    default: return state
  }
}
```

### *5. View*
```javascript
import { countUpBy } from '../actions/count'
import { connect } from 'react-redux'

// Component

const mapStateToProps = (state) => ({
  count: state.count,
})

connect(mapStateToProps, { countUpBy })(Component)
```

# When use Rematch

When a React application requires a state manager, Redux becames almost the first options chosed by devs.

Redux has a pattern workflow that helps to understand and predict the state of the application all the time.

In this workflow, to change the state, one has to subscribe actions an reducers to the store that will dispatch the user requests and then propagate that state change to everyone.

Redux has some standard ways to do all this, which works really well. You have to register the actions, that are the user requests done, that will cause to the store dispatch the reducers that will update the store and then notify all subscribed components that are connected to the store listening for any update.

In this workflow there are a several things to and also **test** in order to add a new models and modifiers to the state.
You have to write as almost copy paste some code snippets with new stuff to do all this in different parts all the time the state model changes, and when the app starts to grow, start to becames a kind of boilerplate.

This is where Rematch appears, not in order to remove redux, instead of enhance and simplify the design of how the store is modeled by adding a *model* concept where actions and reducers are centralized being this way just one place where all the store is defined and controlled.

### But I already have everything in redux, so?

Rematch has a [Migration Guide](https://rematch.gitbooks.io/rematch/#migrating-from-redux) which is really easy.

## Documentation:

  **[Rematch](https://rematch.gitbooks.io/rematch/)**
