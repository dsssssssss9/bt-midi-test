bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Angry)
})
bluetooth.startUartService()
bluetooth.setTransmitPower(7)
basic.forever(function () {
	
})
