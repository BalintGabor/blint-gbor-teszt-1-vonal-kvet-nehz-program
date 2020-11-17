let AktualisErzekeloAllapot = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let ElozoErzekeloAllapot = 0
let UtolsoErzekeloValtozas = 0
RingbitCar.forward()
basic.forever(function () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3)) {
        AktualisErzekeloAllapot = 3
    } else {
        if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
            AktualisErzekeloAllapot = 1
        } else {
            if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
                AktualisErzekeloAllapot = 2
            } else {
                if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_0)) {
                    AktualisErzekeloAllapot = 0
                }
            }
        }
    }
    if (AktualisErzekeloAllapot != ElozoErzekeloAllapot) {
        if (AktualisErzekeloAllapot == 3) {
            if (ElozoErzekeloAllapot == 0) {
                RingbitCar.running_distance(RingbitCar.Direction_run.backward, 0)
            } else {
                if (ElozoErzekeloAllapot == 1) {
                    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 45)
                } else {
                    if (ElozoErzekeloAllapot == 2) {
                        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 45)
                    }
                }
            }
        } else {
            RingbitCar.forward()
        }
    }
})
