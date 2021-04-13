# useEffectLogger

[Link to NPM](https://www.npmjs.com/package/useeffectlogger)

This is a custom React hook that is a drop in replacement for the `useEffect` hook. It will log the index of the variable that triggered the hook, the before and after value of the variable in a table.

`npm i useeffectlogger`

```JavaScript
import useEffectLogger from 'useEffectLogger'
  //change useEffect to useEffectLogger
  
  // useEffect(()=>{
  // },[user,password])
  
  useEffectLogger(()=>{
  },[user,password])
```

This will be logged in the console when the `user` variable has changed in the above example.

|(index)|before|after|
|---|---|---|
|0|"usernam"|"username"|
