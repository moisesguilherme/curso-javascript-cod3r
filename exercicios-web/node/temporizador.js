const schedule = require('node-schedule')

console.log(" >>>")
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 3', function() {
    console.log('Excutando Tarefa 1!', new Date().getSeconds())
})


setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 11
regra.second = 30


const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

