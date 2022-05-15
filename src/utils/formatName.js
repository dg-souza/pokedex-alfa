const formatName = (name = '', end = 1) => {
    return name.slice(0, end).toUpperCase() + name.slice(end, name.length)
}

export default { formatName }