function result({ code, msg, data }) {
    return { code, msg, data };
}

function success({ code = 200, msg = 'success', data = null }) {
    return result({ code, msg, data });
}

function fail({ code = -1, msg = 'fail', data = null }) {
    return result({ code, msg, data });
}

export default {
    result,
    success,
    fail
};