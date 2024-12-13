export function formatDate(date:string){
    const event = new Date(date);
    return event.toLocaleDateString('en-IN', {
        day:'2-digit',
        month:'short',
        year:'2-digit'
    })
}