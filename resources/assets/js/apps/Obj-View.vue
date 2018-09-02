<template>
	<c-app curentSystem="Просмотр объектов"  >
		<v-navigation-drawer fixed v-model="drawerRight" right :clipped="$vuetify.breakpoint.width > 1264"  app>
			<v-toolbar-title class="text-xs-center mt-3">Фильтр</v-toolbar-title> 
			<v-btn block  small class="check-size accent" @click="filterSet()" > <v-icon>search</v-icon> Поиск</v-btn>
			<v-card-text>
				<v-form>
					<v-text-field v-model="message"  box clear-icon="mdi-close-circle" clearable label="Message" type="text"
								:prependIcon="marker ? 'toggle_on' : 'toggle_off'" :append-outer-icon="message ? 'check_box' : 'check_box_outline_blank'" :prepend-icon="icon"/>
				</v-form>
			</v-card-text>
		</v-navigation-drawer>

	</c-app>
</template>

<script>
	import CApp from '../components/c-app';
								/*@click:append="toggleMarker"
								@click:append-outer="sendMessage"
								@click:prepend="changeIcon"
								@click:clear="clearMessage"*/
	export default {
		data: () => ({
			drawerRight: true,
			password: 'Password',
			show: false,
			message: 'Hey!',
			marker: true,
			iconIndex: 0,
			icons: ['=','>','>=','<','<=','!='],
		}),
		computed: {
			icon () {
				return this.icons[this.iconIndex]
			},
		},
		components: {
			CApp,
		},
		methods: {
			filterSet(){
				console.log(333);
			},
			toggleMarker () {
				this.marker = !this.marker
			},
			sendMessage () {
				this.resetIcon()
				this.clearMessage()
			},
			clearMessage () {
				this.message = ''
			},
			resetIcon () {
				this.iconIndex = 0
			},
			changeIcon () {
				this.iconIndex === this.icons.length - 1 ? this.iconIndex = 0 : this.iconIndex++
			}
		},
		created: function (){
		},
	}
</script>

<style lang="scss">
</style>