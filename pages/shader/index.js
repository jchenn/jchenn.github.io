function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let isSuccess = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (isSuccess) return shader;

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    let isSuccess = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (isSuccess) return program;

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function resizeCanvas(canvas) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
}

function main() {
    let canvas = document.querySelector('canvas');

    resizeCanvas(canvas);

    let gl = canvas.getContext('webgl');

    let vshaderSource = document.querySelector('#vshader').text;
    let fshaderSource = document.querySelector('#fshader').text;

    let vshader = createShader(gl, gl.VERTEX_SHADER, vshaderSource);
    let fshader = createShader(gl, gl.FRAGMENT_SHADER, fshaderSource);

    let program = createProgram(gl, vshader, fshader);

    let positionAttrib = gl.getAttribLocation(program, 'aPosition');

    let positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    let vertices = [
        0, 0,
        0, .5,
        .7, 0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.enableVertexAttribArray(positionAttrib);
    gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);

    // gl.drawArrays(gl.TRIANGLES, 0, 3);
    // gl.drawArrays(gl.LINE_STRIP, 0, 3);
    gl.drawArrays(gl.LINES, 0, 3);

}

main();
