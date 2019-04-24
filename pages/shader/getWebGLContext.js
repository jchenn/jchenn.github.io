function getWebGLContext(canvas) {
    let attrs = {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false
    };

    let gl = canvas.getContext('webgl2', attrs) ||
             canvas.getContext('webgl', attrs) ||
             canvas.getContext('experimental-webgl', attrs);

    return {
        gl: gl
    }
}