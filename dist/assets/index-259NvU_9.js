var Hi=Object.defineProperty;var Ji=(n,e,t)=>e in n?Hi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var X=(n,e,t)=>Ji(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function H(){}function si(n){return n()}function On(){return Object.create(null)}function He(n){n.forEach(si)}function ri(n){return typeof n=="function"}function lt(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function zi(n){return Object.keys(n).length===0}function oi(n,...e){if(n==null){for(const i of e)i(void 0);return H}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Qt(n){let e;return oi(n,t=>e=t)(),e}function ai(n,e,t){n.$$.on_destroy.push(oi(e,t))}function w(n,e){n.appendChild(e)}function J(n,e,t){n.insertBefore(e,t||null)}function Y(n){n.parentNode&&n.parentNode.removeChild(n)}function Ve(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function O(n){return document.createElement(n)}function B(n){return document.createTextNode(n)}function K(){return B(" ")}function li(){return B("")}function st(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function F(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Wi(n){return Array.from(n.childNodes)}function te(n,e){e=""+e,n.data!==e&&(n.data=e)}let rt;function tt(n){rt=n}function Qi(){if(!rt)throw new Error("Function called outside component initialization");return rt}function Xi(n){Qi().$$.on_mount.push(n)}const Fe=[],An=[];let Re=[];const $n=[],Zi=Promise.resolve();let Xt=!1;function es(){Xt||(Xt=!0,Zi.then(ci))}function Zt(n){Re.push(n)}const xt=new Set;let De=0;function ci(){if(De!==0)return;const n=rt;do{try{for(;De<Fe.length;){const e=Fe[De];De++,tt(e),ts(e.$$)}}catch(e){throw Fe.length=0,De=0,e}for(tt(null),Fe.length=0,De=0;An.length;)An.pop()();for(let e=0;e<Re.length;e+=1){const t=Re[e];xt.has(t)||(xt.add(t),t())}Re.length=0}while(Fe.length);for(;$n.length;)$n.pop()();Xt=!1,xt.clear(),tt(n)}function ts(n){if(n.fragment!==null){n.update(),He(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Zt)}}function ns(n){const e=[],t=[];Re.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),Re=e}const wt=new Set;let Ee;function Nt(){Ee={r:0,c:[],p:Ee}}function It(){Ee.r||He(Ee.c),Ee=Ee.p}function ie(n,e){n&&n.i&&(wt.delete(n),n.i(e))}function ue(n,e,t,i){if(n&&n.o){if(wt.has(n))return;wt.add(n),Ee.c.push(()=>{wt.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function ae(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function an(n){n&&n.c()}function At(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Zt(()=>{const r=n.$$.on_mount.map(si).filter(ri);n.$$.on_destroy?n.$$.on_destroy.push(...r):He(r),n.$$.on_mount=[]}),s.forEach(Zt)}function $t(n,e){const t=n.$$;t.fragment!==null&&(ns(t.after_update),He(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function is(n,e){n.$$.dirty[0]===-1&&(Fe.push(n),es(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Lt(n,e,t,i,s,r,o=null,a=[-1]){const l=rt;tt(n);const c=n.$$={fragment:null,ctx:[],props:r,update:H,not_equal:s,bound:On(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:On(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,m,...d)=>{const p=d.length?d[0]:m;return c.ctx&&s(c.ctx[f],c.ctx[f]=p)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](p),u&&is(n,f)),m}):[],c.update(),u=!0,He(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const f=Wi(e.target);c.fragment&&c.fragment.l(f),f.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&ie(n.$$.fragment),At(n,e.target,e.anchor),ci()}tt(l)}class Ct{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){$t(this,1),this.$destroy=H}$on(e,t){if(!ri(t))return H;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!zi(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ss="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ss);const rs=`game:
  id: boiler_7
  title: Boiler 7
  version: "0.1"

  start:
    scene: arrival
    node: dock
  
  ui:
    theme: default
    text_speed: normal`,os=`items:
  inspector_badge:
    name: boiler.item.badge.name
    description: boiler.item.badge.description

  valve_key:
    name: boiler.item.valve_key.name
    description: boiler.item.valve_key.description

  maintenance_log:
    name: boiler.item.log.name
    description: boiler.item.log.description

  sealed_report:
    name: boiler.item.report.name
    description: boiler.item.report.description
`,as=`boiler:
  choice:
    enter_floor: "Enter the boiler floor"
    inspect_valve: "Inspect the auxiliary manifold"
    speak_worker: "Speak to the machinist"
    go_control: "Proceed to the control room"
    read_logs: "Review maintenance logs"
    descend: "Descend to the lower chamber"
    return: "Return to the boiler floor"
    back: "Go back"
    stabilize: "Attempt manual stabilization"
    investigate: "Inspect regulator housing"
    retreat: "Retreat to control room"
    proceed_end: "Complete inspection and file report"
    stabilize_after: "Stabilize the regulator"
    take_valve_key: "Take the valve key"
    listen_worker: "Press the machinist for details"
    submit_report: "Submit official report"

  item:
    badge:
      name: "Inspection Badge"
      description: "Test1"
    valve_key:
      name: "Valve Key"
      description: "Test2"
    log:
      name: "Maintenance Logbook"
      description: "Test3"
    report:
      name: "Sealed Report"
      description: "Test4"

  arrival:
    dock: >
      The river fog hangs low over Dock 17.
      Boiler 7's exhaust tower cuts through the mist like a blade.
      The district depends on this unit. If it fails, half the lower wards go dark.
      Your inspection orders are stamped urgent.

  floor:
    main: >
      The boiler floor trembles beneath rotating pistons and hissing valves.
      Workers move with deliberate efficiency, but conversations stop when you pass.
      Pressure gauges along the far wall flicker slightly above normal range.

    valve: >
      The auxiliary pressure manifold is partially disassembled.
      A heavy brass valve key rests on a maintenance hook.
      No one seems eager to claim responsibility.

    worker: >
      A soot-streaked machinist glances at your badge, then away.
      After a pause, they lean closer.
      "The readings started spiking three nights ago.
      Management says it's drift.
      It isn't drift."

    main_worker_warning: >
      The machinist's warning lingers in your thoughts.

  control:
    entry: >
      The control room overlooks the boiler core through reinforced glass.
      Brass levers line the console.
      The central pressure needle vibrates against its housing.

    logs: >
      The maintenance ledger shows repeated recalibrations filed and overwritten.
      Several entries are signed, then crossed out.
      Someone adjusted tolerance limits upward.

    entry_tampering_found: >
      The falsified calibration logs shift your perception of the room.

  lower:
    entrance: >
      The lower chamber radiates dry heat.
      Steam condenses along the iron ribs of the chamber walls.
      The primary regulator housing groans under strain.

    no_valve_key_hint: >
      Without the proper valve key, any manual adjustment would be reckless.

    no_tampering_hint: >
      Nothing here immediately suggests deliberate interference.
      It could still be mechanical fatigue.

    stabilize: >
      You slot the valve key into the regulator assembly.
      A controlled counterturn releases trapped pressure in measured bursts.
      The chamber's vibration eases, though the system remains fragile.

    tampering: >
      Behind the regulator casing, a calibration stop has been filed down.
      Not worn.
      Filed.
      The boiler was forced to tolerate higher pressure than design allowed.

    valve_ready: >
      With the valve key in hand, manual adjustment is possible.

    entrance_suspicion: >
      Knowing the regulator was altered changes the meaning of every vibration.

  conclusion:
    final: >
      Boiler 7 stabilizes under your intervention.
      The district lights will hold tonight.
      What follows depends on what you choose to report.

    neutral: >
      You file a technical summary.
      No accusations.
      No names.
      The Guild will review internally.

    worker_trust: >
      You attach documentation of the tampering.
      The machinists will know someone listened.
      The Guild will not appreciate the implication.

    isolated: >
      You restrict your report to mechanical anomalies.
      Quietly.
      Whatever this was, it will remain buried.

    end: >
      The report is sealed and filed.
      Boiler 7 will hold — for now.
      Whatever forces strained the regulator remain outside the scope of your duty.
      The district sleeps with its lights intact.
`,ls=`rules:
  systems:
    randomness: false
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,cs=`scene:
  id: arrival
  nodes:

    - id: dock
      text:
        - key: boiler.arrival.dock
      choices:
        - id: enter_floor
          text: boiler.choice.enter_floor
          effects:
            - add_item:
                id: inspector_badge
          goto:
            scene: boiler_floor
            node: main`,fs=`scene:
  id: boiler_floor
  nodes:

    - id: main
      text:
        - key: boiler.floor.main

        - if:
            eq:
              var: worker_warning
              value: true
          then:
            key: boiler.floor.main_worker_warning

      choices:
        - id: inspect_valve
          text: boiler.choice.inspect_valve
          goto:
            scene: boiler_floor
            node: valve

        - id: speak_worker
          text: boiler.choice.speak_worker
          goto:
            scene: boiler_floor
            node: worker

        - id: go_control
          text: boiler.choice.go_control
          goto:
            scene: control_room
            node: entry

    - id: valve
      text:
        - key: boiler.floor.valve
      choices:
        - id: take_valve_key
          text: boiler.choice.take_valve_key
          if:
            eq:
              var: has_valve_key
              value: false
          effects:
            - add_item:
                id: valve_key
            - set:
                var: has_valve_key
                value: true
          goto:
            scene: boiler_floor
            node: main

        - id: back_main
          text: boiler.choice.back
          goto:
            scene: boiler_floor
            node: main

    - id: worker
      text:
        - key: boiler.floor.worker
      choices:
        - id: listen_worker
          text: boiler.choice.listen_worker
          if:
            eq:
              var: worker_warning
              value: false
          effects:
            - set:
                var: worker_warning
                value: true
            - add:
                var: trust_level
                value: 1
          goto:
            scene: boiler_floor
            node: main

        - id: back_main
          text: boiler.choice.back
          goto:
            scene: boiler_floor
            node: main`,us=`scene:
  id: conclusion
  nodes:

    - id: final
      text:
        - key: boiler.conclusion.final

        - if:
            eq:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.neutral

        - if:
            gt:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.worker_trust

        - if:
            lt:
              var: trust_level
              value: 0
          then:
            key: boiler.conclusion.isolated

      choices:
        - id: submit_report
          text: boiler.choice.submit_report
          if:
            eq:
              var: report_submitted
              value: false
          effects:
            - add_item:
                id: sealed_report
            - set:
                var: report_submitted
                value: true
          goto:
            scene: conclusion
            node: end

    - id: end
      text:
        - key: boiler.conclusion.end
      choices: []`,hs=`scene:
  id: control_room
  nodes:

    - id: entry
      text:
        - key: boiler.control.entry

        - if:
            eq:
              var: discovered_tampering
              value: true
          then:
            key: boiler.control.entry_tampering_found

      choices:
        - id: read_logs
          text: boiler.choice.read_logs
          if:
            eq:
              var: discovered_tampering
              value: false
          effects:
            - add_item:
                id: maintenance_log
            - set:
                var: discovered_tampering
                value: true
          goto:
            scene: control_room
            node: entry

        - id: descend
          text: boiler.choice.descend
          goto:
            scene: lower_chamber
            node: entrance

        - id: return_floor
          text: boiler.choice.return
          goto:
            scene: boiler_floor
            node: main`,ds=`scene:
  id: lower_chamber
  nodes:

    - id: entrance
      text:
        - key: boiler.lower.entrance

        - if:
            eq:
              var: has_valve_key
              value: false
          then:
            key: boiler.lower.no_valve_key_hint

        - if:
            eq:
              var: has_valve_key
              value: true
          then:
            key: boiler.lower.valve_ready

        - if:
            eq:
              var: discovered_tampering
              value: false
          then:
            key: boiler.lower.no_tampering_hint

        - if:
            eq:
              var: discovered_tampering
              value: true
          then:
            key: boiler.lower.entrance_suspicion

      choices:
        - id: investigate
          text: boiler.choice.investigate
          if:
            all:
              - eq:
                  var: discovered_tampering
                  value: true
              - eq:
                  var: investigated_regulator
                  value: false
          effects:
            - set:
                var: investigated_regulator
                value: true
            - add:
                var: trust_level
                value: -1
          goto:
            scene: lower_chamber
            node: tampering_result

        - id: stabilize
          text: boiler.choice.stabilize
          if:
            eq:
              var: has_valve_key
              value: true
          effects:
            - add:
                var: pressure_level
                value: -1
          goto:
            scene: conclusion
            node: final

        - id: retreat
          text: boiler.choice.retreat
          goto:
            scene: control_room
            node: entry

    - id: tampering_result
      text:
        - key: boiler.lower.tampering
      choices:
        - id: back_entrance
          text: boiler.choice.back
          goto:
            scene: lower_chamber
            node: entrance`,ms=`state:
  variables:

    has_valve_key:
      type: boolean
      initial: false
      visible: true

    worker_warning:
      type: boolean
      initial: false
      visible: true

    discovered_tampering:
      type: boolean
      initial: false
      visible: true

    investigated_regulator:
      type: boolean
      initial: false
      visible: true

    report_submitted:
      type: boolean
      initial: false
      visible: true

    trust_level:
      type: number
      initial: 0
      visible: true

    pressure_level:
      type: number
      initial: 3
      visible: true`,gs=`game:
  id: midnight_switchboard
  title: Midnight Switchboard
  version: "0.1"

  start:
    scene: prologue
    node: desk

  ui:
    theme: default
    text_speed: normal`,ps=`items:

  brass_token:
    name: midnight.item.brass_token.name
    description: midnight.item.brass_token.description

  operator_badge:
    name: midnight.item.operator_badge.name
    description: midnight.item.operator_badge.description

  torn_photograph:
    name: midnight.item.torn_photograph.name
    description: midnight.item.torn_photograph.description

  ritual_diagram:
    name: midnight.item.ritual_diagram.name
    description: midnight.item.ritual_diagram.description

  basement_key:
    name: midnight.item.basement_key.name
    description: midnight.item.basement_key.description

  black_candle:
    name: midnight.item.black_candle.name
    description: midnight.item.black_candle.description`,ys=`midnight:

  prologue:
    desk_intro: "The switchboard office is dimly lit. Only one desk lamp burns."
    call_active: "You lift the receiver. Static crackles across the line, interruped only by the sound of slow, deliberate breathing."
    call_rings_again: "The telephone continues ringing. It refuses to be ignored."
    clock: "The clock reads 00:17."
    anxiety_status: "Your anxiety level is {{anxiety}}."
    line_open: "The line is already open. Someone is breathing softly."

    lift_receiver: "Your fingers hover over the receiver."
    receiver_warm: "It already feels faintly warm."
    ringing_stops: "The ringing stops the instant you lift it."

    breathing_stops: "The breathing stops."
    feel_watched: "You feel watched."
    memory_echo: "For a moment, you remember answering this call before."

    trace_attempt: "You attempt to trace the origin."
    board_flicker: "The switchboard lights flicker."
    signal_internal: "The signal appears to originate from somewhere inside this building."

    ringing_louder: "The ringing is louder now."
    anxiety_display: "Anxiety: {{anxiety}}"
    ringing_drill: "The sound drills into your skull."

  switchboard:
    main_intro: "The switchboard stretches across the wall. Wires hang like veins."
    desk: "The desk is cluttered with invoices and old cigarette ash."
    panel: "The control panel hums faintly beneath your fingertips."
    cabinet: "A narrow filing cabinet stands half open."

    status_line: "Anxiety: {{anxiety}} | Corruption: {{corruption}}"
    light_flicker: "The overhead light flickers intermittently."
    cable_sway: "One of the unplugged cables sways gently. There is no draft."
    board_familiar: "The board feels almost familiar beneath your hands."

    listen_still: "You stand perfectly still."
    listen_normal: "Only the faint hum of electricity answers you."
    listen_other: "Something else hums beneath it. Slow. Patient."

    token_visible: "A small brass token lies near the blotter."

    drawer_open: "The drawer resists before sliding open."
    badge_present: "An old operator badge rests inside."
    badge_indent: "The empty indentation suggests it belonged there for years."

    faded_initial: "One switch is labeled only with a faded initial: M."
    badge_match: "The insignia on the badge matches a scratched symbol near the lower switches."

    photo_visible: "A torn photograph is tucked inside a folder."
    photo_shift: "The photograph seems slightly different each time you glance at it."

  records:
    archive_intro: "Rows of old folders line the archive room."
    files: "Most files are mundane. A few are sealed with red wax."
    diagram_reaction: "The diagram seems older than the paper it rests on."

    dust_air: "Dust hangs in the air like suspended breath."
    drawers_ajar: "The filing drawers seem slightly ajar, though you do not remember opening them."

    diagram_visible: "Among the folders is a brittle sheet covered in geometric inkwork."

    corruption_display: "Corruption: {{corruption}}"
    whisper_floor: "You briefly hear whispering beneath the floorboards."

  basement:
    stairs_intro: "The staircase descends into darkness."
    chamber_intro: "The basement chamber smells of wax and stone."
    ritual_ready: "You kneel at the center of the circle."
    ritual_complete: "The candle burns unnaturally steady."

    status_line: "Anxiety: {{anxiety}} | Corruption: {{corruption}}"
    hands_tremble: "Your hands tremble as you grip the railing."
    shift_below: "Something shifts below. Not footsteps. Something heavier."

    chamber_description: "The chamber is circular. Symbols are carved into the stone."
    corruption_display: "Corruption: {{corruption}}"
    symbols_pulse: "The symbols faintly pulse."

    pattern_memory: "You replicate the pattern from memory."

    corruption_surge: "Corruption surges to {{corruption}}."
    air_tears: "The air tears open."

  operator:
    line_active: "The operator's voice emerges through static."
    trust_shift: "There is recognition in the silence."
    tension: "The conversation tightens like a wire pulled too far."
    revelation: "The truth filters through distortion."

    status_line: "Anxiety: {{anxiety}} | Trust: {{operator_trust}} | Corruption: {{corruption}}"
    layered_voice: "The voice sounds layered, as if two people speak in unison."

    voice_softens: "The voice softens. \\"You finally remember.\\""

    receiver_hot: "The receiver feels hot against your ear."

    truth_inhuman: "The truth is no longer human."

  ending:
    ritual_outcome: "The ritual concludes."
    reconciliation: "The voice thanks you. The line goes silent."
    collapse: "The connection overloads. Reality flickers."
    revelation: "The truth settles heavily in the air."
    sealed: "The chamber grows quiet. The veil remains intact."
    consumed: "Darkness folds inward. The line never disconnects."
    closed: "The office is empty. Morning light filters in."
    open: "The switchboard hums. Something remains connected."

    corruption_level: "Corruption level: {{corruption}}"
    veil_split: "The veil splits completely."
    never_alone: "You were never alone in the room."

  choice:
    answer_call: "Answer the ringing phone"
    answer_after_delay: "Finally answer the ringing phone"
    ignore_call: "Ignore the ringing"
    leave_desk: "Leave the desk"

    speak: "Speak into the receiver"
    hang_up: "Hang up"

    trace_call: "Attempt to trace the call"
    listen_room: "Stand still and listen"
    open_drawer: "Open the desk drawer"
    take_badge: "Take the operator badge"

    inspect_desk: "Inspect the desk"
    inspect_panel: "Examine the control panel"
    inspect_cabinet: "Open the filing cabinet"
    go_records: "Enter the records room"
    open_operator_line: "Open a direct operator line"
    descend_basement: "Descend to the basement"
    back: "Return"

    take_token: "Take the brass token"
    study_label: "Study the faded label"
    take_photo: "Take the torn photograph"
    search_deeper: "Search deeper inside"

    search_files: "Search through the files"
    return_switchboard: "Return to the switchboard"
    take_diagram: "Take the ritual diagram"
    disturb_stack: "Disturb the stack of folders"
    steady_self: "Steady yourself"

    descend_fully: "Descend fully"
    hesitate: "Hesitate on the stairs"
    retreat: "Retreat upstairs"

    prepare_ritual: "Prepare the ritual"
    search_room: "Search the chamber"
    ignite_candle: "Ignite the black candle"
    abort_ritual: "Abort the ritual"
    face_consequence: "Face the consequence"

    speak_name: "Speak the operator's name"
    accuse: "Accuse the voice"
    listen_silently: "Listen silently"
    accept_truth: "Accept the truth"
    doubt_again: "Express doubt"
    escalate: "Escalate the confrontation"
    withdraw: "Withdraw from the line"
    pursue_truth: "Pursue the truth"
    disconnect: "Disconnect the line"

    continue: "Continue"
    finish: "Finish"

  item:
    brass_token:
      name: "Brass Token"
      description: "A heavy brass token engraved with an unfamiliar symbol."

    operator_badge:
      name: "Operator Badge"
      description: "A tarnished badge bearing the switchboard insignia."

    torn_photograph:
      name: "Torn Photograph"
      description: "A half-burned photograph of two figures near the switchboard."

    ritual_diagram:
      name: "Ritual Diagram"
      description: "A geometric pattern drawn in fading ink."

    basement_key:
      name: "Basement Key"
      description: "A cold iron key labeled only with a scratched B."

    black_candle:
      name: "Black Candle"
      description: "A thick candle that absorbs more light than it reflects."`,_s=`rules:
  systems:
    randomness: true
    inventory: true
    statistics: false
    combat: false

  state_visibility:
    default: visible`,bs=`scene:
  id: basement_chamber

  nodes:

    - id: chamber
      text:
        - key: midnight.basement.chamber_intro
        - key: midnight.basement.chamber_description
        - key: midnight.basement.corruption_display
        - if:
            gt:
              var: corruption
              value: 2
          then:
            key: midnight.basement.symbols_pulse
      choices:

        - id: prepare_ritual
          text: midnight.choice.prepare_ritual
          if:
            all:
              - has_item:
                  id: ritual_diagram
              - has_item:
                  id: black_candle
          goto:
            scene: basement_chamber
            node: ritual_ready

        - id: search_room
          text: midnight.choice.search_room
          if:
            not:
              has_item:
                id: black_candle
          effects:
            - add_item:
                id: black_candle
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_chamber
            node: chamber

        - id: retreat
          text: midnight.choice.retreat
          goto:
            scene: basement_stairs
            node: stairs


    - id: ritual_ready
      text:
        - key: midnight.basement.ritual_ready
        - if:
            eq:
              var: ritual_unlocked
              value: true
          then:
            key: midnight.basement.pattern_memory
      choices:

        - id: ignite_candle
          text: midnight.choice.ignite_candle
          effects:
            - add:
                var: corruption
                value: 2
          goto:
            scene: basement_chamber
            node: ritual_complete

        - id: abort_ritual
          text: midnight.choice.abort_ritual
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_chamber
            node: chamber


    - id: ritual_complete
      text:
        - key: midnight.basement.ritual_complete
        - key: midnight.basement.corruption_surge
        - if:
            gte:
              var: corruption
              value: 4
          then:
            key: midnight.basement.air_tears
      choices:

        - id: face_consequence
          text: midnight.choice.face_consequence
          goto:
            scene: ending
            node: ritual_outcome`,ws=`scene:
  id: basement_stairs

  nodes:

    - id: stairs
      text:
        - key: midnight.basement.stairs_intro
        - key: midnight.basement.status_line
        - if:
            gt:
              var: anxiety
              value: 2
          then:
            key: midnight.basement.hands_tremble
        - if:
            gt:
              var: corruption
              value: 1
          then:
            key: midnight.basement.shift_below
      effects:
        - set:
            var: in_switchboard_room
            value: false
        - set:
            var: in_basement
            value: true
      choices:

        - id: descend_fully
          text: midnight.choice.descend_fully
          goto:
            scene: basement_chamber
            node: chamber

        - id: hesitate
          text: midnight.choice.hesitate
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: basement_stairs
            node: stairs

        - id: retreat_upstairs
          text: midnight.choice.retreat
          effects:
            - set:
                var: in_switchboard_room
                value: true
            - set:
                var: in_basement
                value: false
          goto:
            scene: switchboard_room
            node: main`,vs=`scene:
  id: ending

  nodes:

    - id: ritual_outcome
      text:
        - key: midnight.ending.ritual_outcome
        - key: midnight.ending.corruption_level
        - if:
            gte:
              var: corruption
              value: 4
          then:
            key: midnight.ending.veil_split
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:

        - id: ritual_good
          text: midnight.choice.continue
          if:
            lt:
              var: corruption
              value: 4
          goto:
            scene: ending
            node: sealed

        - id: ritual_bad
          text: midnight.choice.continue
          if:
            gte:
              var: corruption
              value: 4
          goto:
            scene: ending
            node: consumed


    - id: reconciliation
      text:
        - key: midnight.ending.reconciliation
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_reconciliation
          text: midnight.choice.finish
          goto:
            scene: ending
            node: closed


    - id: collapse
      text:
        - key: midnight.ending.collapse
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_collapse
          text: midnight.choice.finish
          goto:
            scene: ending
            node: consumed


    - id: revelation_outcome
      text:
        - key: midnight.ending.revelation
        - if:
            gt:
              var: corruption
              value: 3
          then:
            key: midnight.ending.never_alone
      effects:
        - set:
            var: ending_triggered
            value: true
      choices:
        - id: end_revelation
          text: midnight.choice.finish
          goto:
            scene: ending
            node: open


    - id: sealed
      text:
        - key: midnight.ending.sealed
      choices: []

    - id: consumed
      text:
        - key: midnight.ending.consumed
      choices: []

    - id: closed
      text:
        - key: midnight.ending.closed
      choices: []

    - id: open
      text:
        - key: midnight.ending.open
      choices: []`,ks=`scene:
  id: operator_line

  nodes:

    - id: line_active
      text:
        - key: midnight.operator.line_active
        - key: midnight.operator.status_line
        - if:
            gt:
              var: corruption
              value: 2
          then:
            key: midnight.operator.layered_voice
      choices:

        - id: speak_name
          text: midnight.choice.speak_name
          if:
            eq:
              var: knows_operator_name
              value: true
          effects:
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: operator_line
            node: trust_shift

        - id: accuse
          text: midnight.choice.accuse
          effects:
            - add:
                var: anxiety
                value: 1
            - add:
                var: operator_trust
                value: -1
          goto:
            scene: operator_line
            node: tension

        - id: listen_silently
          text: midnight.choice.listen_silently
          effects:
            - add:
                var: corruption
                value:
                  random: "1/2"
          goto:
            scene: operator_line
            node: revelation

        - id: hang_up_line
          text: midnight.choice.hang_up
          goto:
            scene: switchboard_room
            node: main


    - id: trust_shift
      text:
        - key: midnight.operator.trust_shift
        - if:
            gte:
              var: operator_trust
              value: 2
          then:
            key: midnight.operator.voice_softens
      choices:

        - id: accept_truth
          text: midnight.choice.accept_truth
          if:
            gte:
              var: operator_trust
              value: 2
          goto:
            scene: ending
            node: reconciliation

        - id: doubt_again
          text: midnight.choice.doubt_again
          goto:
            scene: operator_line
            node: tension


    - id: tension
      text:
        - key: midnight.operator.tension
        - if:
            gt:
              var: anxiety
              value: 3
          then:
            key: midnight.operator.receiver_hot
      choices:

        - id: escalate
          text: midnight.choice.escalate
          effects:
            - add:
                var: corruption
                value: 1
          goto:
            scene: ending
            node: collapse

        - id: withdraw
          text: midnight.choice.withdraw
          goto:
            scene: switchboard_room
            node: main


    - id: revelation
      text:
        - key: midnight.operator.revelation
        - if:
            gt:
              var: corruption
              value: 3
          then:
            key: midnight.operator.truth_inhuman
      choices:

        - id: pursue_truth
          text: midnight.choice.pursue_truth
          goto:
            scene: ending
            node: revelation_outcome

        - id: disconnect
          text: midnight.choice.disconnect
          goto:
            scene: switchboard_room
            node: main`,Ss=`scene:
  id: prologue

  nodes:

    - id: desk
      text:
        - key: midnight.prologue.desk_intro
        - key: midnight.prologue.clock
        - key: midnight.prologue.anxiety_status
        - if:
            eq:
              var: call_answered
              value: true
          then:
            key: midnight.prologue.line_open
      choices:
        - id: answer_call
          text: midnight.choice.answer_call
          if:
            eq:
              var: call_answered
              value: false
          effects:
            - set:
                var: call_answered
                value: true
            - add:
                var: anxiety
                value:
                  random: "1/2"
          goto:
            scene: prologue
            node: lift_receiver

        - id: ignore_call
          text: midnight.choice.ignore_call
          if:
            eq:
              var: call_answered
              value: false
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: prologue
            node: call_rings_again

        - id: proceed_room
          text: midnight.choice.leave_desk
          if:
            eq:
              var: call_answered
              value: true
          goto:
            scene: switchboard_room
            node: main


    - id: lift_receiver
      text:
        - key: midnight.prologue.lift_receiver
        - if:
            gte:
              var: anxiety
              value: 1
          then:
            key: midnight.prologue.receiver_warm
        - key: midnight.prologue.ringing_stops
      choices:
        - id: continue_answer
          text: midnight.choice.answer_call
          goto:
            scene: prologue
            node: call_active


    - id: call_active
      text:
        - key: midnight.prologue.call_active
        - key: midnight.prologue.breathing_stops
        - if:
            gte:
              var: anxiety
              value: 1
          then:
            key: midnight.prologue.feel_watched
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.prologue.memory_echo
      choices:
        - id: speak
          text: midnight.choice.speak
          effects:
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: main

        - id: hang_up
          text: midnight.choice.hang_up
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: switchboard_room
            node: main

        - id: trace_call
          text: midnight.choice.trace_call
          effects:
            - add:
                var: anxiety
                value: 1
          goto:
            scene: prologue
            node: static_response


    - id: static_response
      text:
        - key: midnight.prologue.trace_attempt
        - key: midnight.prologue.board_flicker
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.prologue.signal_internal
      choices:
        - id: abandon_trace
          text: midnight.choice.back
          goto:
            scene: prologue
            node: call_active


    - id: call_rings_again
      text:
        - key: midnight.prologue.call_rings_again
        - key: midnight.prologue.ringing_louder
        - key: midnight.prologue.anxiety_display
        - if:
            gte:
              var: anxiety
              value: 2
          then:
            key: midnight.prologue.ringing_drill
      choices:
        - id: answer_after_delay
          text: midnight.choice.answer_after_delay
          effects:
            - set:
                var: call_answered
                value: true
            - add:
                var: corruption
                value: 1
          goto:
            scene: prologue
            node: lift_receiver`,Ns=`scene:
  id: records_room

  nodes:

    - id: archive
      text:
        - key: midnight.records.archive_intro
        - key: midnight.records.dust_air
        - if:
            gt:
              var: corruption
              value: 1
          then:
            key: midnight.records.drawers_ajar
      choices:

        - id: search_files
          text: midnight.choice.search_files
          goto:
            scene: records_room
            node: files

        - id: return_switchboard
          text: midnight.choice.return_switchboard
          goto:
            scene: switchboard_room
            node: main


    - id: files
      text:
        - key: midnight.records.files
        - if:
            not:
              has_item:
                id: ritual_diagram
          then:
            key: midnight.records.diagram_visible
      choices:

        - id: take_diagram
          text: midnight.choice.take_diagram
          if:
            not:
              has_item:
                id: ritual_diagram
          effects:
            - add_item:
                id: ritual_diagram
            - set:
                var: ritual_unlocked
                value: true
            - add:
                var: corruption
                value: 1
          goto:
            scene: records_room
            node: diagram_reaction

        - id: disturb_stack
          text: midnight.choice.disturb_stack
          effects:
            - add:
                var: anxiety
                value:
                  random: "1/2"
          goto:
            scene: records_room
            node: archive

        - id: back_archive
          text: midnight.choice.back
          goto:
            scene: records_room
            node: archive


    - id: diagram_reaction
      text:
        - key: midnight.records.diagram_reaction
        - key: midnight.records.corruption_display
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.records.whisper_floor
      choices:

        - id: steady_self
          text: midnight.choice.steady_self
          effects:
            - add:
                var: anxiety
                value: -1
          goto:
            scene: records_room
            node: archive

        - id: return_with_diagram
          text: midnight.choice.return_switchboard
          goto:
            scene: switchboard_room
            node: main`,Is=`scene:
  id: switchboard_room

  nodes:

    - id: main
      text:
        - key: midnight.switchboard.main_intro
        - key: midnight.switchboard.status_line
        - if:
            gt:
              var: anxiety
              value: 2
          then:
            key: midnight.switchboard.light_flicker
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.cable_sway
        - if:
            gte:
              var: operator_trust
              value: 2
          then:
            key: midnight.switchboard.board_familiar
      choices:
        - id: inspect_desk
          text: midnight.choice.inspect_desk
          goto:
            scene: switchboard_room
            node: desk

        - id: inspect_panel
          text: midnight.choice.inspect_panel
          goto:
            scene: switchboard_room
            node: panel

        - id: inspect_cabinet
          text: midnight.choice.inspect_cabinet
          goto:
            scene: switchboard_room
            node: cabinet

        - id: listen_room
          text: midnight.choice.listen_room
          goto:
            scene: switchboard_room
            node: ambience

        - id: go_records
          text: midnight.choice.go_records
          goto:
            scene: records_room
            node: archive

        - id: go_operator_line
          text: midnight.choice.open_operator_line
          if:
            gt:
              var: operator_trust
              value: 0
          goto:
            scene: operator_line
            node: line_active

        - id: go_basement
          text: midnight.choice.descend_basement
          if:
            has_item:
              id: basement_key
          goto:
            scene: basement_stairs
            node: stairs


    - id: ambience
      text:
        - key: midnight.switchboard.listen_still
        - if:
            lt:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.listen_normal
        - if:
            gte:
              var: corruption
              value: 2
          then:
            key: midnight.switchboard.listen_other
      choices:
        - id: return_from_listen
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: desk
      text:
        - key: midnight.switchboard.desk
        - if:
            not:
              has_item:
                id: brass_token
          then:
            key: midnight.switchboard.token_visible
      choices:
        - id: take_token
          text: midnight.choice.take_token
          if:
            not:
              has_item:
                id: brass_token
          effects:
            - add_item:
                id: brass_token
          goto:
            scene: switchboard_room
            node: desk

        - id: open_drawer
          text: midnight.choice.open_drawer
          goto:
            scene: switchboard_room
            node: drawer

        - id: back_main
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: drawer
      text:
        - key: midnight.switchboard.drawer_open
        - if:
            not:
              has_item:
                id: operator_badge
          then:
            key: midnight.switchboard.badge_present
        - if:
            has_item:
              id: operator_badge
          then:
            key: midnight.switchboard.badge_indent
      choices:
        - id: take_badge
          text: midnight.choice.take_badge
          if:
            not:
              has_item:
                id: operator_badge
          effects:
            - add_item:
                id: operator_badge
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: drawer

        - id: close_drawer
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: desk


    - id: panel
      text:
        - key: midnight.switchboard.panel
        - if:
            eq:
              var: knows_operator_name
              value: false
          then:
            key: midnight.switchboard.faded_initial
        - if:
            has_item:
              id: operator_badge
          then:
            key: midnight.switchboard.badge_match
      choices:
        - id: study_label
          text: midnight.choice.study_label
          if:
            eq:
              var: knows_operator_name
              value: false
          effects:
            - set:
                var: knows_operator_name
                value: true
            - add:
                var: operator_trust
                value: 1
          goto:
            scene: switchboard_room
            node: panel

        - id: back_main_panel
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main


    - id: cabinet
      text:
        - key: midnight.switchboard.cabinet
        - if:
            not:
              has_item:
                id: torn_photograph
          then:
            key: midnight.switchboard.photo_visible
        - if:
            gte:
              var: corruption
              value: 1
          then:
            key: midnight.switchboard.photo_shift
      choices:
        - id: take_photo
          text: midnight.choice.take_photo
          if:
            not:
              has_item:
                id: torn_photograph
          effects:
            - add_item:
                id: torn_photograph
            - add:
                var: anxiety
                value: 1
          goto:
            scene: switchboard_room
            node: cabinet

        - id: find_key
          text: midnight.choice.search_deeper
          if:
            all:
              - has_item:
                  id: torn_photograph
              - not:
                  has_item:
                    id: basement_key
          effects:
            - add_item:
                id: basement_key
          goto:
            scene: switchboard_room
            node: cabinet

        - id: back_main_cabinet
          text: midnight.choice.back
          goto:
            scene: switchboard_room
            node: main`,Es=`state:
  variables:

    # Narrative progression flags
    call_answered:
      type: boolean
      initial: false
      visible: true

    knows_operator_name:
      type: boolean
      initial: false
      visible: true

    ritual_unlocked:
      type: boolean
      initial: false
      visible: true

    ending_triggered:
      type: boolean
      initial: false
      visible: false

    # Psychological pressure system
    anxiety:
      type: number
      initial: 0
      visible: true

    # Corruption escalation counter
    corruption:
      type: number
      initial: 0
      visible: true

    # Trust variable affecting dialogue paths
    operator_trust:
      type: number
      initial: 0
      visible: true

    # Location awareness
    in_switchboard_room:
      type: boolean
      initial: true
      visible: true

    in_basement:
      type: boolean
      initial: false
      visible: true`,ln=Symbol.for("yaml.alias"),en=Symbol.for("yaml.document"),Se=Symbol.for("yaml.map"),fi=Symbol.for("yaml.pair"),ge=Symbol.for("yaml.scalar"),Je=Symbol.for("yaml.seq"),ce=Symbol.for("yaml.node.type"),Le=n=>!!n&&typeof n=="object"&&n[ce]===ln,Dt=n=>!!n&&typeof n=="object"&&n[ce]===en,ct=n=>!!n&&typeof n=="object"&&n[ce]===Se,G=n=>!!n&&typeof n=="object"&&n[ce]===fi,j=n=>!!n&&typeof n=="object"&&n[ce]===ge,ft=n=>!!n&&typeof n=="object"&&n[ce]===Je;function x(n){if(n&&typeof n=="object")switch(n[ce]){case Se:case Je:return!0}return!1}function V(n){if(n&&typeof n=="object")switch(n[ce]){case ln:case Se:case ge:case Je:return!0}return!1}const ui=n=>(j(n)||x(n))&&!!n.anchor,Ie=Symbol("break visit"),Ts=Symbol("skip children"),nt=Symbol("remove node");function ze(n,e){const t=Os(e);Dt(n)?je(null,n.contents,t,Object.freeze([n]))===nt&&(n.contents=null):je(null,n,t,Object.freeze([]))}ze.BREAK=Ie;ze.SKIP=Ts;ze.REMOVE=nt;function je(n,e,t,i){const s=As(n,e,t,i);if(V(s)||G(s))return $s(n,i,s),je(n,s,t,i);if(typeof s!="symbol"){if(x(e)){i=Object.freeze(i.concat(e));for(let r=0;r<e.items.length;++r){const o=je(r,e.items[r],t,i);if(typeof o=="number")r=o-1;else{if(o===Ie)return Ie;o===nt&&(e.items.splice(r,1),r-=1)}}}else if(G(e)){i=Object.freeze(i.concat(e));const r=je("key",e.key,t,i);if(r===Ie)return Ie;r===nt&&(e.key=null);const o=je("value",e.value,t,i);if(o===Ie)return Ie;o===nt&&(e.value=null)}}return s}function Os(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function As(n,e,t,i){var s,r,o,a,l;if(typeof t=="function")return t(n,e,i);if(ct(e))return(s=t.Map)==null?void 0:s.call(t,n,e,i);if(ft(e))return(r=t.Seq)==null?void 0:r.call(t,n,e,i);if(G(e))return(o=t.Pair)==null?void 0:o.call(t,n,e,i);if(j(e))return(a=t.Scalar)==null?void 0:a.call(t,n,e,i);if(Le(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,i)}function $s(n,e,t){const i=e[e.length-1];if(x(i))i.items[n]=t;else if(G(i))n==="key"?i.key=t:i.value=t;else if(Dt(i))i.contents=t;else{const s=Le(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const Ls={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Cs=n=>n.replace(/[!,[\]{}]/g,e=>Ls[e]);class ee{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ee.defaultYaml,e),this.tags=Object.assign({},ee.defaultTags,t)}clone(){const e=new ee(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new ee(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ee.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ee.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:ee.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ee.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),s=i.shift();switch(s){case"%TAG":{if(i.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[r,o]=i;return this.tags[r]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=i;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const o=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,o),!1}}default:return t(0,`Unknown directive ${s}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),o)}const[,i,s]=e.match(/^(.*!)([^!]*)$/s);s||t(`The ${e} tag has no suffix`);const r=this.tags[i];if(r)try{return r+decodeURIComponent(s)}catch(o){return t(String(o)),null}return i==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+Cs(e.substring(i.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let s;if(e&&i.length>0&&V(e.contents)){const r={};ze(e.contents,(o,a)=>{V(a)&&a.tag&&(r[a.tag]=!0)}),s=Object.keys(r)}else s=[];for(const[r,o]of i)r==="!!"&&o==="tag:yaml.org,2002:"||(!e||s.some(a=>a.startsWith(o)))&&t.push(`%TAG ${r} ${o}`);return t.join(`
`)}}ee.defaultYaml={explicit:!1,version:"1.2"};ee.defaultTags={"!!":"tag:yaml.org,2002:"};function hi(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function di(n){const e=new Set;return ze(n,{Value(t,i){i.anchor&&e.add(i.anchor)}}),e}function mi(n,e){for(let t=1;;++t){const i=`${n}${t}`;if(!e.has(i))return i}}function Ds(n,e){const t=[],i=new Map;let s=null;return{onAnchor:r=>{t.push(r),s??(s=di(n));const o=mi(e,s);return s.add(o),o},setAnchors:()=>{for(const r of t){const o=i.get(r);if(typeof o=="object"&&o.anchor&&(j(o.node)||x(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=r,a}}},sourceObjects:i}}function qe(n,e,t,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let s=0,r=i.length;s<r;++s){const o=i[s],a=qe(n,i,String(s),o);a===void 0?delete i[s]:a!==o&&(i[s]=a)}else if(i instanceof Map)for(const s of Array.from(i.keys())){const r=i.get(s),o=qe(n,i,s,r);o===void 0?i.delete(s):o!==r&&i.set(s,o)}else if(i instanceof Set)for(const s of Array.from(i)){const r=qe(n,i,s,s);r===void 0?i.delete(s):r!==s&&(i.delete(s),i.add(r))}else for(const[s,r]of Object.entries(i)){const o=qe(n,i,s,r);o===void 0?delete i[s]:o!==r&&(i[s]=o)}return n.call(e,t,i)}function le(n,e,t){if(Array.isArray(n))return n.map((i,s)=>le(i,String(s),t));if(n&&typeof n.toJSON=="function"){if(!t||!ui(n))return n.toJSON(e,t);const i={aliasCount:0,count:1,res:void 0};t.anchors.set(n,i),t.onCreate=r=>{i.res=r,delete t.onCreate};const s=n.toJSON(e,t);return t.onCreate&&t.onCreate(s),s}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class cn{constructor(e){Object.defineProperty(this,ce,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:s,reviver:r}={}){if(!Dt(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},a=le(this,"",o);if(typeof s=="function")for(const{count:l,res:c}of o.anchors.values())s(c,l);return typeof r=="function"?qe(r,{"":a},"",a):a}}class fn extends cn{constructor(e){super(ln),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let i;t!=null&&t.aliasResolveCache?i=t.aliasResolveCache:(i=[],ze(e,{Node:(r,o)=>{(Le(o)||ui(o))&&i.push(o)}}),t&&(t.aliasResolveCache=i));let s;for(const r of i){if(r===this)break;r.anchor===this.source&&(s=r)}return s}toJSON(e,t){if(!t)return{source:this.source};const{anchors:i,doc:s,maxAliasCount:r}=t,o=this.resolve(s,t);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=i.get(o);if(a||(le(o,null,t),a=i.get(o)),(a==null?void 0:a.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(r>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=vt(s,o,i)),a.count*a.aliasCount>r)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(e,t,i){const s=`*${this.source}`;if(e){if(hi(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${s} `}return s}}function vt(n,e,t){if(Le(e)){const i=e.resolve(n),s=t&&i&&t.get(i);return s?s.count*s.aliasCount:0}else if(x(e)){let i=0;for(const s of e.items){const r=vt(n,s,t);r>i&&(i=r)}return i}else if(G(e)){const i=vt(n,e.key,t),s=vt(n,e.value,t);return Math.max(i,s)}return 1}const gi=n=>!n||typeof n!="function"&&typeof n!="object";class $ extends cn{constructor(e){super(ge),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:le(this.value,e,t)}toString(){return String(this.value)}}$.BLOCK_FOLDED="BLOCK_FOLDED";$.BLOCK_LITERAL="BLOCK_LITERAL";$.PLAIN="PLAIN";$.QUOTE_DOUBLE="QUOTE_DOUBLE";$.QUOTE_SINGLE="QUOTE_SINGLE";const Ms="tag:yaml.org,2002:";function Ps(n,e,t){if(e){const i=t.filter(r=>r.tag===e),s=i.find(r=>!r.format)??i[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return t.find(i=>{var s;return((s=i.identify)==null?void 0:s.call(i,n))&&!i.format})}function ot(n,e,t){var f,m,d;if(Dt(n)&&(n=n.contents),V(n))return n;if(G(n)){const p=(m=(f=t.schema[Se]).createNode)==null?void 0:m.call(f,t.schema,null,t);return p.items.push(n),p}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:i,onAnchor:s,onTagObj:r,schema:o,sourceObjects:a}=t;let l;if(i&&n&&typeof n=="object"){if(l=a.get(n),l)return l.anchor??(l.anchor=s(n)),new fn(l.anchor);l={anchor:null,node:null},a.set(n,l)}e!=null&&e.startsWith("!!")&&(e=Ms+e.slice(2));let c=Ps(n,e,o.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const p=new $(n);return l&&(l.node=p),p}c=n instanceof Map?o[Se]:Symbol.iterator in Object(n)?o[Je]:o[Se]}r&&(r(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((d=c==null?void 0:c.nodeClass)==null?void 0:d.from)=="function"?c.nodeClass.from(t.schema,n,t):new $(n);return e?u.tag=e:c.default||(u.tag=c.tag),l&&(l.node=u),u}function Et(n,e,t){let i=t;for(let s=e.length-1;s>=0;--s){const r=e[s];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const o=[];o[r]=i,i=o}else i=new Map([[r,i]])}return ot(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Ze=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class pi extends cn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(i=>V(i)||G(i)?i.clone(e):i),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ze(e))this.add(t);else{const[i,...s]=e,r=this.get(i,!0);if(x(r))r.addIn(s,t);else if(r===void 0&&this.schema)this.set(i,Et(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}deleteIn(e){const[t,...i]=e;if(i.length===0)return this.delete(t);const s=this.get(t,!0);if(x(s))return s.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...s]=e,r=this.get(i,!0);return s.length===0?!t&&j(r)?r.value:r:x(r)?r.getIn(s,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!G(t))return!1;const i=t.value;return i==null||e&&j(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(i.length===0)return this.has(t);const s=this.get(t,!0);return x(s)?s.hasIn(i):!1}setIn(e,t){const[i,...s]=e;if(s.length===0)this.set(i,t);else{const r=this.get(i,!0);if(x(r))r.setIn(s,t);else if(r===void 0&&this.schema)this.set(i,Et(this.schema,s,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${s}`)}}}const Bs=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function be(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const Te=(n,e,t)=>n.endsWith(`
`)?be(t,e):t.includes(`
`)?`
`+be(t,e):(n.endsWith(" ")?"":" ")+t,yi="flow",tn="block",kt="quoted";function Mt(n,e,t="flow",{indentAtStart:i,lineWidth:s=80,minContentWidth:r=20,onFold:o,onOverflow:a}={}){if(!s||s<0)return n;s<r&&(r=0);const l=Math.max(1+r,1+s-e.length);if(n.length<=l)return n;const c=[],u={};let f=s-e.length;typeof i=="number"&&(i>s-Math.max(2,r)?c.push(0):f=s-i);let m,d,p=!1,h=-1,g=-1,_=-1;t===tn&&(h=Ln(n,h,e.length),h!==-1&&(f=h+l));for(let I;I=n[h+=1];){if(t===kt&&I==="\\"){switch(g=h,n[h+1]){case"x":h+=3;break;case"u":h+=5;break;case"U":h+=9;break;default:h+=1}_=h}if(I===`
`)t===tn&&(h=Ln(n,h,e.length)),f=h+e.length+l,m=void 0;else{if(I===" "&&d&&d!==" "&&d!==`
`&&d!=="	"){const S=n[h+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(m=h)}if(h>=f)if(m)c.push(m),f=m+l,m=void 0;else if(t===kt){for(;d===" "||d==="	";)d=I,I=n[h+=1],p=!0;const S=h>_+1?h-2:g-1;if(u[S])return n;c.push(S),u[S]=!0,f=S+l,m=void 0}else p=!0}d=I}if(p&&a&&a(),c.length===0)return n;o&&o();let k=n.slice(0,c[0]);for(let I=0;I<c.length;++I){const S=c[I],E=c[I+1]||n.length;S===0?k=`
${e}${n.slice(0,E)}`:(t===kt&&u[S]&&(k+=`${n[S]}\\`),k+=`
${e}${n.slice(S+1,E)}`)}return k}function Ln(n,e,t){let i=e,s=e+1,r=n[s];for(;r===" "||r==="	";)if(e<s+t)r=n[++e];else{do r=n[++e];while(r&&r!==`
`);i=e,s=e+1,r=n[s]}return i}const Pt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Bt=n=>/^(%|---|\.\.\.)/m.test(n);function Fs(n,e,t){if(!e||e<0)return!1;const i=e-t,s=n.length;if(s<=i)return!1;for(let r=0,o=0;r<s;++r)if(n[r]===`
`){if(r-o>i)return!0;if(o=r+1,s-o<=i)return!1}return!0}function it(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:i}=e,s=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(Bt(n)?"  ":"");let o="",a=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(o+=t.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{o+=t.slice(a,l);const u=t.substr(l+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(l,6)}l+=5,a=l+1}break;case"n":if(i||t[l+2]==='"'||t.length<s)l+=1;else{for(o+=t.slice(a,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)o+=`
`,l+=2;o+=r,t[l+2]===" "&&(o+="\\"),l+=1,a=l+1}break;default:l+=1}return o=a?o+t.slice(a):t,i?o:Mt(o,r,kt,Pt(e,!1))}function nn(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return it(n,e);const t=e.indent||(Bt(n)?"  ":""),i="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?i:Mt(i,t,yi,Pt(e,!1))}function Ke(n,e){const{singleQuote:t}=e.options;let i;if(t===!1)i=it;else{const s=n.includes('"'),r=n.includes("'");s&&!r?i=nn:r&&!s?i=it:i=t?nn:it}return i(n,e)}let sn;try{sn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{sn=/\n+(?!\n|$)/g}function St({comment:n,type:e,value:t},i,s,r){const{blockQuote:o,commentString:a,lineWidth:l}=i.options;if(!o||/\n[\t ]+$/.test(t))return Ke(t,i);const c=i.indent||(i.forceBlockIndent||Bt(t)?"  ":""),u=o==="literal"?!0:o==="folded"||e===$.BLOCK_FOLDED?!1:e===$.BLOCK_LITERAL?!0:!Fs(t,l,c.length);if(!t)return u?`|
`:`>
`;let f,m;for(m=t.length;m>0;--m){const E=t[m-1];if(E!==`
`&&E!=="	"&&E!==" ")break}let d=t.substring(m);const p=d.indexOf(`
`);p===-1?f="-":t===d||p!==d.length-1?(f="+",r&&r()):f="",d&&(t=t.slice(0,-d.length),d[d.length-1]===`
`&&(d=d.slice(0,-1)),d=d.replace(sn,`$&${c}`));let h=!1,g,_=-1;for(g=0;g<t.length;++g){const E=t[g];if(E===" ")h=!0;else if(E===`
`)_=g;else break}let k=t.substring(0,_<g?_+1:g);k&&(t=t.substring(k.length),k=k.replace(/\n+/g,`$&${c}`));let S=(h?c?"2":"1":"")+f;if(n&&(S+=" "+a(n.replace(/ ?[\r\n]+/g," ")),s&&s()),!u){const E=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let A=!1;const y=Pt(i,!0);o!=="folded"&&e!==$.BLOCK_FOLDED&&(y.onOverflow=()=>{A=!0});const b=Mt(`${k}${E}${d}`,c,tn,y);if(!A)return`>${S}
${c}${b}`}return t=t.replace(/\n+/g,`$&${c}`),`|${S}
${c}${k}${t}${d}`}function js(n,e,t,i){const{type:s,value:r}=n,{actualString:o,implicitKey:a,indent:l,indentStep:c,inFlow:u}=e;if(a&&r.includes(`
`)||u&&/[[\]{},]/.test(r))return Ke(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return a||u||!r.includes(`
`)?Ke(r,e):St(n,e,t,i);if(!a&&!u&&s!==$.PLAIN&&r.includes(`
`))return St(n,e,t,i);if(Bt(r)){if(l==="")return e.forceBlockIndent=!0,St(n,e,t,i);if(a&&l===c)return Ke(r,e)}const f=r.replace(/\n+/g,`$&
${l}`);if(o){const m=h=>{var g;return h.default&&h.tag!=="tag:yaml.org,2002:str"&&((g=h.test)==null?void 0:g.test(f))},{compat:d,tags:p}=e.doc.schema;if(p.some(m)||d!=null&&d.some(m))return Ke(r,e)}return a?f:Mt(f,l,yi,Pt(e,!1))}function un(n,e,t,i){const{implicitKey:s,inFlow:r}=e,o=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:a}=n;a!==$.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=$.QUOTE_DOUBLE);const l=u=>{switch(u){case $.BLOCK_FOLDED:case $.BLOCK_LITERAL:return s||r?Ke(o.value,e):St(o,e,t,i);case $.QUOTE_DOUBLE:return it(o.value,e);case $.QUOTE_SINGLE:return nn(o.value,e);case $.PLAIN:return js(o,e,t,i);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:u,defaultStringType:f}=e.options,m=s&&u||f;if(c=l(m),c===null)throw new Error(`Unsupported default string type ${m}`)}return c}function _i(n,e){const t=Object.assign({blockQuote:!0,commentString:Bs,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let i;switch(t.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:i,options:t}}function qs(n,e){var s;if(e.tag){const r=n.filter(o=>o.tag===e.tag);if(r.length>0)return r.find(o=>o.format===e.format)??r[0]}let t,i;if(j(e)){i=e.value;let r=n.filter(o=>{var a;return(a=o.identify)==null?void 0:a.call(o,i)});if(r.length>1){const o=r.filter(a=>a.test);o.length>0&&(r=o)}t=r.find(o=>o.format===e.format)??r.find(o=>!o.format)}else i=e,t=n.find(r=>r.nodeClass&&i instanceof r.nodeClass);if(!t){const r=((s=i==null?void 0:i.constructor)==null?void 0:s.name)??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${r} value`)}return t}function Ks(n,e,{anchors:t,doc:i}){if(!i.directives)return"";const s=[],r=(j(n)||x(n))&&n.anchor;r&&hi(r)&&(t.add(r),s.push(`&${r}`));const o=n.tag??(e.default?null:e.tag);return o&&s.push(i.directives.tagString(o)),s.join(" ")}function Ye(n,e,t,i){var l;if(G(n))return n.toString(e,t,i);if(Le(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let s;const r=V(n)?n:e.doc.createNode(n,{onTagObj:c=>s=c});s??(s=qs(e.doc.schema.tags,r));const o=Ks(r,s,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const a=typeof s.stringify=="function"?s.stringify(r,e,t,i):j(r)?un(r,e,t,i):r.toString(e,t,i);return o?j(r)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function Rs({key:n,value:e},t,i,s){const{allNullValues:r,doc:o,indent:a,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:f}}=t;let m=V(n)&&n.comment||null;if(f){if(m)throw new Error("With simple keys, key nodes cannot have comments");if(x(n)||!V(n)&&typeof n=="object"){const y="With simple keys, collection cannot be used as a key value";throw new Error(y)}}let d=!f&&(!n||m&&e==null&&!t.inFlow||x(n)||(j(n)?n.type===$.BLOCK_FOLDED||n.type===$.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!d&&(f||!r),indent:a+l});let p=!1,h=!1,g=Ye(n,t,()=>p=!0,()=>h=!0);if(!d&&!t.inFlow&&g.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");d=!0}if(t.inFlow){if(r||e==null)return p&&i&&i(),g===""?"?":d?`? ${g}`:g}else if(r&&!f||e==null&&d)return g=`? ${g}`,m&&!p?g+=Te(g,t.indent,c(m)):h&&s&&s(),g;p&&(m=null),d?(m&&(g+=Te(g,t.indent,c(m))),g=`? ${g}
${a}:`):(g=`${g}:`,m&&(g+=Te(g,t.indent,c(m))));let _,k,I;V(e)?(_=!!e.spaceBefore,k=e.commentBefore,I=e.comment):(_=!1,k=null,I=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!d&&!m&&j(e)&&(t.indentAtStart=g.length+1),h=!1,!u&&l.length>=2&&!t.inFlow&&!d&&ft(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let S=!1;const E=Ye(e,t,()=>S=!0,()=>h=!0);let A=" ";if(m||_||k){if(A=_?`
`:"",k){const y=c(k);A+=`
${be(y,t.indent)}`}E===""&&!t.inFlow?A===`
`&&I&&(A=`

`):A+=`
${t.indent}`}else if(!d&&x(e)){const y=E[0],b=E.indexOf(`
`),T=b!==-1,D=t.inFlow??e.flow??e.items.length===0;if(T||!D){let q=!1;if(T&&(y==="&"||y==="!")){let L=E.indexOf(" ");y==="&"&&L!==-1&&L<b&&E[L+1]==="!"&&(L=E.indexOf(" ",L+1)),(L===-1||b<L)&&(q=!0)}q||(A=`
${t.indent}`)}}else(E===""||E[0]===`
`)&&(A="");return g+=A+E,t.inFlow?S&&i&&i():I&&!S?g+=Te(g,t.indent,c(I)):h&&s&&s(),g}function bi(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const dt="<<",we={identify:n=>n===dt||typeof n=="symbol"&&n.description===dt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new $(Symbol(dt)),{addToJSMap:wi}),stringify:()=>dt},Us=(n,e)=>(we.identify(e)||j(e)&&(!e.type||e.type===$.PLAIN)&&we.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===we.tag&&t.default));function wi(n,e,t){if(t=n&&Le(t)?t.resolve(n.doc):t,ft(t))for(const i of t.items)Vt(n,e,i);else if(Array.isArray(t))for(const i of t)Vt(n,e,i);else Vt(n,e,t)}function Vt(n,e,t){const i=n&&Le(t)?t.resolve(n.doc):t;if(!ct(i))throw new Error("Merge sources must be maps or map aliases");const s=i.toJSON(null,n,Map);for(const[r,o]of s)e instanceof Map?e.has(r)||e.set(r,o):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function vi(n,e,{key:t,value:i}){if(V(t)&&t.addToJSMap)t.addToJSMap(n,e,i);else if(Us(n,t))wi(n,e,i);else{const s=le(t,"",n);if(e instanceof Map)e.set(s,le(i,s,n));else if(e instanceof Set)e.add(s);else{const r=xs(t,s,n),o=le(i,r,n);r in e?Object.defineProperty(e,r,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[r]=o}}return e}function xs(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(V(n)&&(t!=null&&t.doc)){const i=_i(t.doc,{});i.anchors=new Set;for(const r of t.anchors.keys())i.anchors.add(r.anchor);i.inFlow=!0,i.inStringifyKey=!0;const s=n.toString(i);if(!t.mapKeyWarned){let r=JSON.stringify(s);r.length>40&&(r=r.substring(0,36)+'..."'),bi(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return s}return JSON.stringify(e)}function hn(n,e,t){const i=ot(n,void 0,t),s=ot(e,void 0,t);return new ne(i,s)}class ne{constructor(e,t=null){Object.defineProperty(this,ce,{value:fi}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return V(t)&&(t=t.clone(e)),V(i)&&(i=i.clone(e)),new ne(t,i)}toJSON(e,t){const i=t!=null&&t.mapAsMap?new Map:{};return vi(t,i,this)}toString(e,t,i){return e!=null&&e.doc?Rs(this,e,t,i):JSON.stringify(this)}}function ki(n,e,t){return(e.inFlow??n.flow?Ys:Vs)(n,e,t)}function Vs({comment:n,items:e},t,{blockItemPrefix:i,flowChars:s,itemIndent:r,onChompKeep:o,onComment:a}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:r,type:null});let f=!1;const m=[];for(let p=0;p<e.length;++p){const h=e[p];let g=null;if(V(h))!f&&h.spaceBefore&&m.push(""),Tt(t,m,h.commentBefore,f),h.comment&&(g=h.comment);else if(G(h)){const k=V(h.key)?h.key:null;k&&(!f&&k.spaceBefore&&m.push(""),Tt(t,m,k.commentBefore,f))}f=!1;let _=Ye(h,u,()=>g=null,()=>f=!0);g&&(_+=Te(_,r,c(g))),f&&g&&(f=!1),m.push(i+_)}let d;if(m.length===0)d=s.start+s.end;else{d=m[0];for(let p=1;p<m.length;++p){const h=m[p];d+=h?`
${l}${h}`:`
`}}return n?(d+=`
`+be(c(n),l),a&&a()):f&&o&&o(),d}function Ys({items:n},e,{flowChars:t,itemIndent:i}){const{indent:s,indentStep:r,flowCollectionPadding:o,options:{commentString:a}}=e;i+=r;const l=Object.assign({},e,{indent:i,inFlow:!0,type:null});let c=!1,u=0;const f=[];for(let p=0;p<n.length;++p){const h=n[p];let g=null;if(V(h))h.spaceBefore&&f.push(""),Tt(e,f,h.commentBefore,!1),h.comment&&(g=h.comment);else if(G(h)){const k=V(h.key)?h.key:null;k&&(k.spaceBefore&&f.push(""),Tt(e,f,k.commentBefore,!1),k.comment&&(c=!0));const I=V(h.value)?h.value:null;I?(I.comment&&(g=I.comment),I.commentBefore&&(c=!0)):h.value==null&&(k!=null&&k.comment)&&(g=k.comment)}g&&(c=!0);let _=Ye(h,l,()=>g=null);p<n.length-1&&(_+=","),g&&(_+=Te(_,i,a(g))),!c&&(f.length>u||_.includes(`
`))&&(c=!0),f.push(_),u=f.length}const{start:m,end:d}=t;if(f.length===0)return m+d;if(!c){const p=f.reduce((h,g)=>h+g.length+2,2);c=e.options.lineWidth>0&&p>e.options.lineWidth}if(c){let p=m;for(const h of f)p+=h?`
${r}${s}${h}`:`
`;return`${p}
${s}${d}`}else return`${m}${o}${f.join(" ")}${o}${d}`}function Tt({indent:n,options:{commentString:e}},t,i,s){if(i&&s&&(i=i.replace(/^\n+/,"")),i){const r=be(e(i),n);t.push(r.trimStart())}}function Oe(n,e){const t=j(e)?e.value:e;for(const i of n)if(G(i)&&(i.key===e||i.key===t||j(i.key)&&i.key.value===t))return i}class oe extends pi{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Se,e),this.items=[]}static from(e,t,i){const{keepUndefined:s,replacer:r}=i,o=new this(e),a=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||s)&&o.items.push(hn(l,c,i))};if(t instanceof Map)for(const[l,c]of t)a(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))a(l,t[l]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let i;G(e)?i=e:!e||typeof e!="object"||!("key"in e)?i=new ne(e,e==null?void 0:e.value):i=new ne(e.key,e.value);const s=Oe(this.items,i.key),r=(o=this.schema)==null?void 0:o.sortMapEntries;if(s){if(!t)throw new Error(`Key ${i.key} already set`);j(s.value)&&gi(i.value)?s.value.value=i.value:s.value=i.value}else if(r){const a=this.items.findIndex(l=>r(i,l)<0);a===-1?this.items.push(i):this.items.splice(a,0,i)}else this.items.push(i)}delete(e){const t=Oe(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=Oe(this.items,e),s=i==null?void 0:i.value;return(!t&&j(s)?s.value:s)??void 0}has(e){return!!Oe(this.items,e)}set(e,t){this.add(new ne(e,t),!0)}toJSON(e,t,i){const s=i?new i:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items)vi(t,s,r);return s}toString(e,t,i){if(!e)return JSON.stringify(this);for(const s of this.items)if(!G(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ki(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const We={collection:"map",default:!0,nodeClass:oe,tag:"tag:yaml.org,2002:map",resolve(n,e){return ct(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>oe.from(n,e,t)};class $e extends pi{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Je,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=mt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const i=mt(e);if(typeof i!="number")return;const s=this.items[i];return!t&&j(s)?s.value:s}has(e){const t=mt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const i=mt(e);if(typeof i!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[i];j(s)&&gi(t)?s.value=t:this.items[i]=t}toJSON(e,t){const i=[];t!=null&&t.onCreate&&t.onCreate(i);let s=0;for(const r of this.items)i.push(le(r,String(s++),t));return i}toString(e,t,i){return e?ki(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:s}=i,r=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let a of t){if(typeof s=="function"){const l=t instanceof Set?a:String(o++);a=s.call(t,l,a)}r.items.push(ot(a,void 0,i))}}return r}}function mt(n){let e=j(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Qe={collection:"seq",default:!0,nodeClass:$e,tag:"tag:yaml.org,2002:seq",resolve(n,e){return ft(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>$e.from(n,e,t)},Ft={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,i){return e=Object.assign({actualString:!0},e),un(n,e,t,i)}},jt={identify:n=>n==null,createNode:()=>new $(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new $(null),stringify:({source:n},e)=>typeof n=="string"&&jt.test.test(n)?n:e.options.nullStr},dn={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new $(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&dn.test.test(n)){const i=n[0]==="t"||n[0]==="T";if(e===i)return n}return e?t.options.trueStr:t.options.falseStr}};function he({format:n,minFractionDigits:e,tag:t,value:i}){if(typeof i=="bigint")return String(i);const s=typeof i=="number"?i:Number(i);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(i,-0)?"-0":JSON.stringify(i);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let o=r.indexOf(".");o<0&&(o=r.length,r+=".");let a=e-(r.length-o-1);for(;a-- >0;)r+="0"}return r}const Si={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:he},Ni={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():he(n)}},Ii={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new $(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:he},qt=n=>typeof n=="bigint"||Number.isInteger(n),mn=(n,e,t,{intAsBigInt:i})=>i?BigInt(n):parseInt(n.substring(e),t);function Ei(n,e,t){const{value:i}=n;return qt(i)&&i>=0?t+i.toString(e):he(n)}const Ti={identify:n=>qt(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>mn(n,2,8,t),stringify:n=>Ei(n,8,"0o")},Oi={identify:qt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>mn(n,0,10,t),stringify:he},Ai={identify:n=>qt(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>mn(n,2,16,t),stringify:n=>Ei(n,16,"0x")},Gs=[We,Qe,Ft,jt,dn,Ti,Oi,Ai,Si,Ni,Ii];function Cn(n){return typeof n=="bigint"||Number.isInteger(n)}const gt=({value:n})=>JSON.stringify(n),Hs=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:gt},{identify:n=>n==null,createNode:()=>new $(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:gt},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:gt},{identify:Cn,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Cn(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:gt}],Js={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},zs=[We,Qe].concat(Hs,Js),gn={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let s=0;s<t.length;++s)i[s]=t.charCodeAt(s);return i}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},i,s,r){if(!t)return"";const o=t;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=$.BLOCK_LITERAL),e!==$.QUOTE_DOUBLE){const l=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),c=Math.ceil(a.length/l),u=new Array(c);for(let f=0,m=0;f<c;++f,m+=l)u[f]=a.substr(m,l);a=u.join(e===$.BLOCK_LITERAL?`
`:" ")}return un({comment:n,type:e,value:a},i,s,r)}};function $i(n,e){if(ft(n))for(let t=0;t<n.items.length;++t){let i=n.items[t];if(!G(i)){if(ct(i)){i.items.length>1&&e("Each pair must have its own sequence indicator");const s=i.items[0]||new ne(new $(null));if(i.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${i.commentBefore}
${s.key.commentBefore}`:i.commentBefore),i.comment){const r=s.value??s.key;r.comment=r.comment?`${i.comment}
${r.comment}`:i.comment}i=s}n.items[t]=G(i)?i:new ne(i)}}else e("Expected a sequence for this tag");return n}function Li(n,e,t){const{replacer:i}=t,s=new $e(n);s.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof i=="function"&&(o=i.call(e,String(r++),o));let a,l;if(Array.isArray(o))if(o.length===2)a=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)a=c[0],l=o[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=o;s.items.push(hn(a,l,t))}return s}const pn={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:$i,createNode:Li};class Ue extends $e{constructor(){super(),this.add=oe.prototype.add.bind(this),this.delete=oe.prototype.delete.bind(this),this.get=oe.prototype.get.bind(this),this.has=oe.prototype.has.bind(this),this.set=oe.prototype.set.bind(this),this.tag=Ue.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t!=null&&t.onCreate&&t.onCreate(i);for(const s of this.items){let r,o;if(G(s)?(r=le(s.key,"",t),o=le(s.value,r,t)):r=le(s,"",t),i.has(r))throw new Error("Ordered maps must not include duplicate keys");i.set(r,o)}return i}static from(e,t,i){const s=Li(e,t,i),r=new this;return r.items=s.items,r}}Ue.tag="tag:yaml.org,2002:omap";const yn={collection:"seq",identify:n=>n instanceof Map,nodeClass:Ue,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=$i(n,e),i=[];for(const{key:s}of t.items)j(s)&&(i.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):i.push(s.value));return Object.assign(new Ue,t)},createNode:(n,e,t)=>Ue.from(n,e,t)};function Ci({value:n,source:e},t){return e&&(n?Di:Mi).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const Di={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new $(!0),stringify:Ci},Mi={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new $(!1),stringify:Ci},Ws={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:he},Qs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():he(n)}},Xs={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new $(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const i=n.substring(t+1).replace(/_/g,"");i[i.length-1]==="0"&&(e.minFractionDigits=i.length)}return e},stringify:he},ut=n=>typeof n=="bigint"||Number.isInteger(n);function Kt(n,e,t,{intAsBigInt:i}){const s=n[0];if((s==="-"||s==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),i){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const o=BigInt(n);return s==="-"?BigInt(-1)*o:o}const r=parseInt(n,t);return s==="-"?-1*r:r}function _n(n,e,t){const{value:i}=n;if(ut(i)){const s=i.toString(e);return i<0?"-"+t+s.substr(1):t+s}return he(n)}const Zs={identify:ut,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>Kt(n,2,2,t),stringify:n=>_n(n,2,"0b")},er={identify:ut,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>Kt(n,1,8,t),stringify:n=>_n(n,8,"0")},tr={identify:ut,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>Kt(n,0,10,t),stringify:he},nr={identify:ut,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>Kt(n,2,16,t),stringify:n=>_n(n,16,"0x")};class xe extends oe{constructor(e){super(e),this.tag=xe.tag}add(e){let t;G(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ne(e.key,null):t=new ne(e,null),Oe(this.items,t.key)||this.items.push(t)}get(e,t){const i=Oe(this.items,e);return!t&&G(i)?j(i.key)?i.key.value:i.key:i}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const i=Oe(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new ne(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:s}=i,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof s=="function"&&(o=s.call(t,o,o)),r.items.push(hn(o,null,i));return r}}xe.tag="tag:yaml.org,2002:set";const bn={collection:"map",identify:n=>n instanceof Set,nodeClass:xe,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>xe.from(n,e,t),resolve(n,e){if(ct(n)){if(n.hasAllNullValues(!0))return Object.assign(new xe,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function wn(n,e){const t=n[0],i=t==="-"||t==="+"?n.substring(1):n,s=o=>e?BigInt(o):Number(o),r=i.replace(/_/g,"").split(":").reduce((o,a)=>o*s(60)+s(a),s(0));return t==="-"?s(-1)*r:r}function Pi(n){let{value:e}=n,t=o=>o;if(typeof e=="bigint")t=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return he(n);let i="";e<0&&(i="-",e*=t(-1));const s=t(60),r=[e%s];return e<60?r.unshift(0):(e=(e-r[0])/s,r.unshift(e%s),e>=60&&(e=(e-r[0])/s,r.unshift(e))),i+r.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Bi={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>wn(n,t),stringify:Pi},Fi={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>wn(n,!1),stringify:Pi},Rt={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(Rt.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,i,s,r,o,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,i-1,s,r||0,o||0,a||0,l);const u=e[8];if(u&&u!=="Z"){let f=wn(u,!1);Math.abs(f)<30&&(f*=60),c-=6e4*f}return new Date(c)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Dn=[We,Qe,Ft,jt,Di,Mi,Zs,er,tr,nr,Ws,Qs,Xs,gn,we,yn,pn,bn,Bi,Fi,Rt],Mn=new Map([["core",Gs],["failsafe",[We,Qe,Ft]],["json",zs],["yaml11",Dn],["yaml-1.1",Dn]]),Pn={binary:gn,bool:dn,float:Ii,floatExp:Ni,floatNaN:Si,floatTime:Fi,int:Oi,intHex:Ai,intOct:Ti,intTime:Bi,map:We,merge:we,null:jt,omap:yn,pairs:pn,seq:Qe,set:bn,timestamp:Rt},ir={"tag:yaml.org,2002:binary":gn,"tag:yaml.org,2002:merge":we,"tag:yaml.org,2002:omap":yn,"tag:yaml.org,2002:pairs":pn,"tag:yaml.org,2002:set":bn,"tag:yaml.org,2002:timestamp":Rt};function Yt(n,e,t){const i=Mn.get(e);if(i&&!n)return t&&!i.includes(we)?i.concat(we):i.slice();let s=i;if(!s)if(Array.isArray(n))s=[];else{const r=Array.from(Mn.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(n))for(const r of n)s=s.concat(r);else typeof n=="function"&&(s=n(s.slice()));return t&&(s=s.concat(we)),s.reduce((r,o)=>{const a=typeof o=="string"?Pn[o]:o;if(!a){const l=JSON.stringify(o),c=Object.keys(Pn).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(a)||r.push(a),r},[])}const sr=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;class vn{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:s,schema:r,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(e)?Yt(e,"compat"):e?Yt(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=s?ir:{},this.tags=Yt(t,this.name,i),this.toStringOptions=a??null,Object.defineProperty(this,Se,{value:We}),Object.defineProperty(this,ge,{value:Ft}),Object.defineProperty(this,Je,{value:Qe}),this.sortMapEntries=typeof o=="function"?o:o===!0?sr:null}clone(){const e=Object.create(vn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function rr(n,e){var l;const t=[];let i=e.directives===!0;if(e.directives!==!1&&n.directives){const c=n.directives.toString(n);c?(t.push(c),i=!0):n.directives.docStart&&(i=!0)}i&&t.push("---");const s=_i(n,e),{commentString:r}=s.options;if(n.commentBefore){t.length!==1&&t.unshift("");const c=r(n.commentBefore);t.unshift(be(c,""))}let o=!1,a=null;if(n.contents){if(V(n.contents)){if(n.contents.spaceBefore&&i&&t.push(""),n.contents.commentBefore){const f=r(n.contents.commentBefore);t.push(be(f,""))}s.forceBlockIndent=!!n.comment,a=n.contents.comment}const c=a?void 0:()=>o=!0;let u=Ye(n.contents,s,()=>a=null,c);a&&(u+=Te(u,"",r(a))),(u[0]==="|"||u[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${u}`:t.push(u)}else t.push(Ye(n.contents,s));if((l=n.directives)!=null&&l.docEnd)if(n.comment){const c=r(n.comment);c.includes(`
`)?(t.push("..."),t.push(be(c,""))):t.push(`... ${c}`)}else t.push("...");else{let c=n.comment;c&&o&&(c=c.replace(/^\n+/,"")),c&&((!o||a)&&t[t.length-1]!==""&&t.push(""),t.push(be(r(c),"")))}return t.join(`
`)+`
`}class Ut{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ce,{value:en});let s=null;typeof t=="function"||Array.isArray(t)?s=t:i===void 0&&t&&(i=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=r;let{version:o}=r;i!=null&&i._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new ee({version:o}),this.setSchema(o,i),this.contents=e===void 0?null:this.createNode(e,s,i)}clone(){const e=Object.create(Ut.prototype,{[ce]:{value:en}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=V(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Me(this.contents)&&this.contents.add(e)}addIn(e,t){Me(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=di(this);e.anchor=!t||i.has(t)?mi(t||"a",i):t}return new fn(e.anchor)}createNode(e,t,i){let s;if(typeof t=="function")e=t.call({"":e},"",e),s=t;else if(Array.isArray(t)){const g=k=>typeof k=="number"||k instanceof String||k instanceof Number,_=t.filter(g).map(String);_.length>0&&(t=t.concat(_)),s=t}else i===void 0&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:o,flow:a,keepUndefined:l,onTagObj:c,tag:u}=i??{},{onAnchor:f,setAnchors:m,sourceObjects:d}=Ds(this,o||"a"),p={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:f,onTagObj:c,replacer:s,schema:this.schema,sourceObjects:d},h=ot(e,u,p);return a&&x(h)&&(h.flow=!0),m(),h}createPair(e,t,i={}){const s=this.createNode(e,null,i),r=this.createNode(t,null,i);return new ne(s,r)}delete(e){return Me(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Ze(e)?this.contents==null?!1:(this.contents=null,!0):Me(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return x(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Ze(e)?!t&&j(this.contents)?this.contents.value:this.contents:x(this.contents)?this.contents.getIn(e,t):void 0}has(e){return x(this.contents)?this.contents.has(e):!1}hasIn(e){return Ze(e)?this.contents!==void 0:x(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Et(this.schema,[e],t):Me(this.contents)&&this.contents.set(e,t)}setIn(e,t){Ze(e)?this.contents=t:this.contents==null?this.contents=Et(this.schema,Array.from(e),t):Me(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let i;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ee({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ee({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(i)this.schema=new vn(Object.assign(i,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:s,onAnchor:r,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},l=le(this.contents,t??"",a);if(typeof r=="function")for(const{count:c,res:u}of a.anchors.values())r(u,c);return typeof o=="function"?qe(o,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return rr(this,e)}}function Me(n){if(x(n))return!0;throw new Error("Expected a YAML collection as document contents")}class ji extends Error{constructor(e,t,i,s){super(),this.name=e,this.code=i,this.message=s,this.pos=t}}class et extends ji{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class or extends ji{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const Bn=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(a=>e.linePos(a));const{line:i,col:s}=t.linePos[0];t.message+=` at line ${i}, column ${s}`;let r=s-1,o=n.substring(e.lineStarts[i-1],e.lineStarts[i]).replace(/[\n\r]+$/,"");if(r>=60&&o.length>80){const a=Math.min(r-39,o.length-79);o="…"+o.substring(a),r-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),i>1&&/^ *$/.test(o.substring(0,r))){let a=n.substring(e.lineStarts[i-2],e.lineStarts[i-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const l=t.linePos[1];(l==null?void 0:l.line)===i&&l.col>s&&(a=Math.max(1,Math.min(l.col-s,80-r)));const c=" ".repeat(r)+"^".repeat(a);t.message+=`:

${o}
${c}
`}};function Ge(n,{flow:e,indicator:t,next:i,offset:s,onError:r,parentIndent:o,startOnNewline:a}){let l=!1,c=a,u=a,f="",m="",d=!1,p=!1,h=null,g=null,_=null,k=null,I=null,S=null,E=null;for(const b of n)switch(p&&(b.type!=="space"&&b.type!=="newline"&&b.type!=="comma"&&r(b.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),p=!1),h&&(c&&b.type!=="comment"&&b.type!=="newline"&&r(h,"TAB_AS_INDENT","Tabs are not allowed as indentation"),h=null),b.type){case"space":!e&&(t!=="doc-start"||(i==null?void 0:i.type)!=="flow-collection")&&b.source.includes("	")&&(h=b),u=!0;break;case"comment":{u||r(b,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const T=b.source.substring(1)||" ";f?f+=m+T:f=T,m="",c=!1;break}case"newline":c?f?f+=b.source:(!S||t!=="seq-item-ind")&&(l=!0):m+=b.source,c=!0,d=!0,(g||_)&&(k=b),u=!0;break;case"anchor":g&&r(b,"MULTIPLE_ANCHORS","A node can have at most one anchor"),b.source.endsWith(":")&&r(b.offset+b.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=b,E??(E=b.offset),c=!1,u=!1,p=!0;break;case"tag":{_&&r(b,"MULTIPLE_TAGS","A node can have at most one tag"),_=b,E??(E=b.offset),c=!1,u=!1,p=!0;break}case t:(g||_)&&r(b,"BAD_PROP_ORDER",`Anchors and tags must be after the ${b.source} indicator`),S&&r(b,"UNEXPECTED_TOKEN",`Unexpected ${b.source} in ${e??"collection"}`),S=b,c=t==="seq-item-ind"||t==="explicit-key-ind",u=!1;break;case"comma":if(e){I&&r(b,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),I=b,c=!1,u=!1;break}default:r(b,"UNEXPECTED_TOKEN",`Unexpected ${b.type} token`),c=!1,u=!1}const A=n[n.length-1],y=A?A.offset+A.source.length:s;return p&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&r(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),h&&(c&&h.indent<=o||(i==null?void 0:i.type)==="block-map"||(i==null?void 0:i.type)==="block-seq")&&r(h,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:I,found:S,spaceBefore:l,comment:f,hasNewline:d,anchor:g,tag:_,newlineAfterProp:k,end:y,start:E??y}}function at(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(at(e.key)||at(e.value))return!0}return!1;default:return!0}}function rn(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const i=e.end[0];i.indent===n&&(i.source==="]"||i.source==="}")&&at(e)&&t(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function qi(n,e,t){const{uniqueKeys:i}=n.options;if(i===!1)return!1;const s=typeof i=="function"?i:(r,o)=>r===o||j(r)&&j(o)&&r.value===o.value;return e.some(r=>s(r.key,t))}const Fn="All mapping items must start at the same column";function ar({composeNode:n,composeEmptyNode:e},t,i,s,r){var u;const o=(r==null?void 0:r.nodeClass)??oe,a=new o(t.schema);t.atRoot&&(t.atRoot=!1);let l=i.offset,c=null;for(const f of i.items){const{start:m,key:d,sep:p,value:h}=f,g=Ge(m,{indicator:"explicit-key-ind",next:d??(p==null?void 0:p[0]),offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0}),_=!g.found;if(_){if(d&&(d.type==="block-seq"?s(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==i.indent&&s(l,"BAD_INDENT",Fn)),!g.anchor&&!g.tag&&!p){c=g.end,g.comment&&(a.comment?a.comment+=`
`+g.comment:a.comment=g.comment);continue}(g.newlineAfterProp||at(d))&&s(d??m[m.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=g.found)==null?void 0:u.indent)!==i.indent&&s(l,"BAD_INDENT",Fn);t.atKey=!0;const k=g.end,I=d?n(t,d,g,s):e(t,k,m,null,g,s);t.schema.compat&&rn(i.indent,d,s),t.atKey=!1,qi(t,a.items,I)&&s(k,"DUPLICATE_KEY","Map keys must be unique");const S=Ge(p??[],{indicator:"map-value-ind",next:h,offset:I.range[2],onError:s,parentIndent:i.indent,startOnNewline:!d||d.type==="block-scalar"});if(l=S.end,S.found){_&&((h==null?void 0:h.type)==="block-map"&&!S.hasNewline&&s(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&g.start<S.found.offset-1024&&s(I.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=h?n(t,h,S,s):e(t,l,p,null,S,s);t.schema.compat&&rn(i.indent,h,s),l=E.range[2];const A=new ne(I,E);t.options.keepSourceTokens&&(A.srcToken=f),a.items.push(A)}else{_&&s(I.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(I.comment?I.comment+=`
`+S.comment:I.comment=S.comment);const E=new ne(I);t.options.keepSourceTokens&&(E.srcToken=f),a.items.push(E)}}return c&&c<l&&s(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[i.offset,l,c??l],a}function lr({composeNode:n,composeEmptyNode:e},t,i,s,r){const o=(r==null?void 0:r.nodeClass)??$e,a=new o(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=i.offset,c=null;for(const{start:u,value:f}of i.items){const m=Ge(u,{indicator:"seq-item-ind",next:f,offset:l,onError:s,parentIndent:i.indent,startOnNewline:!0});if(!m.found)if(m.anchor||m.tag||f)(f==null?void 0:f.type)==="block-seq"?s(m.end,"BAD_INDENT","All sequence items must start at the same column"):s(l,"MISSING_CHAR","Sequence item without - indicator");else{c=m.end,m.comment&&(a.comment=m.comment);continue}const d=f?n(t,f,m,s):e(t,m.end,u,null,m,s);t.schema.compat&&rn(i.indent,f,s),l=d.range[2],a.items.push(d)}return a.range=[i.offset,l,c??l],a}function ht(n,e,t,i){let s="";if(n){let r=!1,o="";for(const a of n){const{source:l,type:c}=a;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&i(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=l.substring(1)||" ";s?s+=o+u:s=u,o="";break}case"newline":s&&(o+=l),r=!0;break;default:i(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:s,offset:e}}const Gt="Block collections are not allowed within flow collections",Ht=n=>n&&(n.type==="block-map"||n.type==="block-seq");function cr({composeNode:n,composeEmptyNode:e},t,i,s,r){var g;const o=i.start.source==="{",a=o?"flow map":"flow sequence",l=(r==null?void 0:r.nodeClass)??(o?oe:$e),c=new l(t.schema);c.flow=!0;const u=t.atRoot;u&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let f=i.offset+i.start.source.length;for(let _=0;_<i.items.length;++_){const k=i.items[_],{start:I,key:S,sep:E,value:A}=k,y=Ge(I,{flow:a,indicator:"explicit-key-ind",next:S??(E==null?void 0:E[0]),offset:f,onError:s,parentIndent:i.indent,startOnNewline:!1});if(!y.found){if(!y.anchor&&!y.tag&&!E&&!A){_===0&&y.comma?s(y.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):_<i.items.length-1&&s(y.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),y.comment&&(c.comment?c.comment+=`
`+y.comment:c.comment=y.comment),f=y.end;continue}!o&&t.options.strict&&at(S)&&s(S,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(_===0)y.comma&&s(y.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(y.comma||s(y.start,"MISSING_CHAR",`Missing , between ${a} items`),y.comment){let b="";e:for(const T of I)switch(T.type){case"comma":case"space":break;case"comment":b=T.source.substring(1);break e;default:break e}if(b){let T=c.items[c.items.length-1];G(T)&&(T=T.value??T.key),T.comment?T.comment+=`
`+b:T.comment=b,y.comment=y.comment.substring(b.length+1)}}if(!o&&!E&&!y.found){const b=A?n(t,A,y,s):e(t,y.end,E,null,y,s);c.items.push(b),f=b.range[2],Ht(A)&&s(b.range,"BLOCK_IN_FLOW",Gt)}else{t.atKey=!0;const b=y.end,T=S?n(t,S,y,s):e(t,b,I,null,y,s);Ht(S)&&s(T.range,"BLOCK_IN_FLOW",Gt),t.atKey=!1;const D=Ge(E??[],{flow:a,indicator:"map-value-ind",next:A,offset:T.range[2],onError:s,parentIndent:i.indent,startOnNewline:!1});if(D.found){if(!o&&!y.found&&t.options.strict){if(E)for(const z of E){if(z===D.found)break;if(z.type==="newline"){s(z,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}y.start<D.found.offset-1024&&s(D.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else A&&("source"in A&&((g=A.source)==null?void 0:g[0])===":"?s(A,"MISSING_CHAR",`Missing space after : in ${a}`):s(D.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const q=A?n(t,A,D,s):D.found?e(t,D.end,E,null,D,s):null;q?Ht(A)&&s(q.range,"BLOCK_IN_FLOW",Gt):D.comment&&(T.comment?T.comment+=`
`+D.comment:T.comment=D.comment);const L=new ne(T,q);if(t.options.keepSourceTokens&&(L.srcToken=k),o){const z=c;qi(t,z.items,T)&&s(b,"DUPLICATE_KEY","Map keys must be unique"),z.items.push(L)}else{const z=new oe(t.schema);z.flow=!0,z.items.push(L);const M=(q??T).range;z.range=[T.range[0],M[1],M[2]],c.items.push(z)}f=q?q.range[2]:D.end}}const m=o?"}":"]",[d,...p]=i.end;let h=f;if((d==null?void 0:d.source)===m)h=d.offset+d.source.length;else{const _=a[0].toUpperCase()+a.substring(1),k=u?`${_} must end with a ${m}`:`${_} in block collection must be sufficiently indented and end with a ${m}`;s(f,u?"MISSING_CHAR":"BAD_INDENT",k),d&&d.source.length!==1&&p.unshift(d)}if(p.length>0){const _=ht(p,h,t.options.strict,s);_.comment&&(c.comment?c.comment+=`
`+_.comment:c.comment=_.comment),c.range=[i.offset,h,_.offset]}else c.range=[i.offset,h,h];return c}function Jt(n,e,t,i,s,r){const o=t.type==="block-map"?ar(n,e,t,i,r):t.type==="block-seq"?lr(n,e,t,i,r):cr(n,e,t,i,r),a=o.constructor;return s==="!"||s===a.tagName?(o.tag=a.tagName,o):(s&&(o.tag=s),o)}function fr(n,e,t,i,s){var m;const r=i.tag,o=r?e.directives.tagName(r.source,d=>s(r,"TAG_RESOLVE_FAILED",d)):null;if(t.type==="block-seq"){const{anchor:d,newlineAfterProp:p}=i,h=d&&r?d.offset>r.offset?d:r:d??r;h&&(!p||p.offset<h.offset)&&s(h,"MISSING_CHAR","Missing newline after block sequence props")}const a=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!o||o==="!"||o===oe.tagName&&a==="map"||o===$e.tagName&&a==="seq")return Jt(n,e,t,s,o);let l=e.schema.tags.find(d=>d.tag===o&&d.collection===a);if(!l){const d=e.schema.knownTags[o];if((d==null?void 0:d.collection)===a)e.schema.tags.push(Object.assign({},d,{default:!1})),l=d;else return d?s(r,"BAD_COLLECTION_TYPE",`${d.tag} used for ${a} collection, but expects ${d.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),Jt(n,e,t,s,o)}const c=Jt(n,e,t,s,o,l),u=((m=l.resolve)==null?void 0:m.call(l,c,d=>s(r,"TAG_RESOLVE_FAILED",d),e.options))??c,f=V(u)?u:new $(u);return f.range=c.range,f.tag=o,l!=null&&l.format&&(f.format=l.format),f}function ur(n,e,t){const i=e.offset,s=hr(e,n.options.strict,t);if(!s)return{value:"",type:null,comment:"",range:[i,i,i]};const r=s.mode===">"?$.BLOCK_FOLDED:$.BLOCK_LITERAL,o=e.source?dr(e.source):[];let a=o.length;for(let h=o.length-1;h>=0;--h){const g=o[h][1];if(g===""||g==="\r")a=h;else break}if(a===0){const h=s.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let g=i+s.length;return e.source&&(g+=e.source.length),{value:h,type:r,comment:s.comment,range:[i,g,g]}}let l=e.indent+s.indent,c=e.offset+s.length,u=0;for(let h=0;h<a;++h){const[g,_]=o[h];if(_===""||_==="\r")s.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&t(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),s.indent===0&&(l=g.length),u=h,l===0&&!n.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+_.length+1}for(let h=o.length-1;h>=a;--h)o[h][0].length>l&&(a=h+1);let f="",m="",d=!1;for(let h=0;h<u;++h)f+=o[h][0].slice(l)+`
`;for(let h=u;h<a;++h){let[g,_]=o[h];c+=g.length+_.length+1;const k=_[_.length-1]==="\r";if(k&&(_=_.slice(0,-1)),_&&g.length<l){const S=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;t(c-_.length-(k?2:1),"BAD_INDENT",S),g=""}r===$.BLOCK_LITERAL?(f+=m+g.slice(l)+_,m=`
`):g.length>l||_[0]==="	"?(m===" "?m=`
`:!d&&m===`
`&&(m=`

`),f+=m+g.slice(l)+_,m=`
`,d=!0):_===""?m===`
`?f+=`
`:m=`
`:(f+=m+_,m=" ",d=!1)}switch(s.chomp){case"-":break;case"+":for(let h=a;h<o.length;++h)f+=`
`+o[h][0].slice(l);f[f.length-1]!==`
`&&(f+=`
`);break;default:f+=`
`}const p=i+s.length+e.source.length;return{value:f,type:r,comment:s.comment,range:[i,p,p]}}function hr({offset:n,props:e},t,i){if(e[0].type!=="block-scalar-header")return i(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],r=s[0];let o=0,a="",l=-1;for(let m=1;m<s.length;++m){const d=s[m];if(!a&&(d==="-"||d==="+"))a=d;else{const p=Number(d);!o&&p?o=p:l===-1&&(l=n+m)}}l!==-1&&i(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,u="",f=s.length;for(let m=1;m<e.length;++m){const d=e[m];switch(d.type){case"space":c=!0;case"newline":f+=d.source.length;break;case"comment":t&&!c&&i(d,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),f+=d.source.length,u=d.source.substring(1);break;case"error":i(d,"UNEXPECTED_TOKEN",d.message),f+=d.source.length;break;default:{const p=`Unexpected token in block scalar header: ${d.type}`;i(d,"UNEXPECTED_TOKEN",p);const h=d.source;h&&typeof h=="string"&&(f+=h.length)}}}return{mode:r,indent:o,chomp:a,comment:u,length:f}}function dr(n){const e=n.split(/\n( *)/),t=e[0],i=t.match(/^( *)/),r=[i!=null&&i[1]?[i[1],t.slice(i[1].length)]:["",t]];for(let o=1;o<e.length;o+=2)r.push([e[o],e[o+1]]);return r}function mr(n,e,t){const{offset:i,type:s,source:r,end:o}=n;let a,l;const c=(m,d,p)=>t(i+m,d,p);switch(s){case"scalar":a=$.PLAIN,l=gr(r,c);break;case"single-quoted-scalar":a=$.QUOTE_SINGLE,l=pr(r,c);break;case"double-quoted-scalar":a=$.QUOTE_DOUBLE,l=yr(r,c);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[i,i+r.length,i+r.length]}}const u=i+r.length,f=ht(o,u,e,t);return{value:l,type:a,comment:f.comment,range:[i,u,f.offset]}}function gr(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Ki(n)}function pr(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),Ki(n.slice(1,-1)).replace(/''/g,"'")}function Ki(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let i=e.exec(n);if(!i)return n;let s=i[1],r=" ",o=e.lastIndex;for(t.lastIndex=o;i=t.exec(n);)i[1]===""?r===`
`?s+=r:r=`
`:(s+=r+i[1],r=" "),o=t.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,i=a.exec(n),s+r+((i==null?void 0:i[1])??"")}function yr(n,e){let t="";for(let i=1;i<n.length-1;++i){const s=n[i];if(!(s==="\r"&&n[i+1]===`
`))if(s===`
`){const{fold:r,offset:o}=_r(n,i);t+=r,i=o}else if(s==="\\"){let r=n[++i];const o=br[r];if(o)t+=o;else if(r===`
`)for(r=n[i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="\r"&&n[i+1]===`
`)for(r=n[++i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="x"||r==="u"||r==="U"){const a={x:2,u:4,U:8}[r];t+=wr(n,i+1,a,e),i+=a}else{const a=n.substr(i-1,2);e(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),t+=a}}else if(s===" "||s==="	"){const r=i;let o=n[i+1];for(;o===" "||o==="	";)o=n[++i+1];o!==`
`&&!(o==="\r"&&n[i+2]===`
`)&&(t+=i>r?n.slice(r,i+1):s)}else t+=s}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function _r(n,e){let t="",i=n[e+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&n[e+2]!==`
`);)i===`
`&&(t+=`
`),e+=1,i=n[e+1];return t||(t=" "),{fold:t,offset:e}}const br={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function wr(n,e,t,i){const s=n.substr(e,t),o=s.length===t&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(o)){const a=n.substr(e-2,t+2);return i(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(o)}function Ri(n,e,t,i){const{value:s,type:r,comment:o,range:a}=e.type==="block-scalar"?ur(n,e,i):mr(e,n.options.strict,i),l=t?n.directives.tagName(t.source,f=>i(t,"TAG_RESOLVE_FAILED",f)):null;let c;n.options.stringKeys&&n.atKey?c=n.schema[ge]:l?c=vr(n.schema,s,l,t,i):e.type==="scalar"?c=kr(n,s,e,i):c=n.schema[ge];let u;try{const f=c.resolve(s,m=>i(t??e,"TAG_RESOLVE_FAILED",m),n.options);u=j(f)?f:new $(f)}catch(f){const m=f instanceof Error?f.message:String(f);i(t??e,"TAG_RESOLVE_FAILED",m),u=new $(s)}return u.range=a,u.source=s,r&&(u.type=r),l&&(u.tag=l),c.format&&(u.format=c.format),o&&(u.comment=o),u}function vr(n,e,t,i,s){var a;if(t==="!")return n[ge];const r=[];for(const l of n.tags)if(!l.collection&&l.tag===t)if(l.default&&l.test)r.push(l);else return l;for(const l of r)if((a=l.test)!=null&&a.test(e))return l;const o=n.knownTags[t];return o&&!o.collection?(n.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(s(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[ge])}function kr({atKey:n,directives:e,schema:t},i,s,r){const o=t.tags.find(a=>{var l;return(a.default===!0||n&&a.default==="key")&&((l=a.test)==null?void 0:l.test(i))})||t[ge];if(t.compat){const a=t.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(i))})??t[ge];if(o.tag!==a.tag){const l=e.tagString(o.tag),c=e.tagString(a.tag),u=`Value may be parsed as either ${l} or ${c}`;r(s,"TAG_RESOLVE_FAILED",u,!0)}}return o}function Sr(n,e,t){if(e){t??(t=e.length);for(let i=t-1;i>=0;--i){let s=e[i];switch(s.type){case"space":case"comment":case"newline":n-=s.source.length;continue}for(s=e[++i];(s==null?void 0:s.type)==="space";)n+=s.source.length,s=e[++i];break}}return n}const Nr={composeNode:Ui,composeEmptyNode:kn};function Ui(n,e,t,i){const s=n.atKey,{spaceBefore:r,comment:o,anchor:a,tag:l}=t;let c,u=!0;switch(e.type){case"alias":c=Ir(n,e,i),(a||l)&&i(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Ri(n,e,l,i),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=fr(Nr,n,e,t,i),a&&(c.anchor=a.source.substring(1));break;default:{const f=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;i(e,"UNEXPECTED_TOKEN",f),c=kn(n,e.offset,void 0,null,t,i),u=!1}}return a&&c.anchor===""&&i(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&n.options.stringKeys&&(!j(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&i(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),o&&(e.type==="scalar"&&e.source===""?c.comment=o:c.commentBefore=o),n.options.keepSourceTokens&&u&&(c.srcToken=e),c}function kn(n,e,t,i,{spaceBefore:s,comment:r,anchor:o,tag:a,end:l},c){const u={type:"scalar",offset:Sr(e,t,i),indent:-1,source:""},f=Ri(n,u,a,c);return o&&(f.anchor=o.source.substring(1),f.anchor===""&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(f.spaceBefore=!0),r&&(f.comment=r,f.range[2]=l),f}function Ir({options:n},{offset:e,source:t,end:i},s){const r=new fn(t.substring(1));r.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&s(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=e+t.length,a=ht(i,o,n.strict,s);return r.range=[e,o,a.offset],a.comment&&(r.comment=a.comment),r}function Er(n,e,{offset:t,start:i,value:s,end:r},o){const a=Object.assign({_directives:e},n),l=new Ut(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},u=Ge(i,{indicator:"doc-start",next:s??(r==null?void 0:r[0]),offset:t,onError:o,parentIndent:0,startOnNewline:!0});u.found&&(l.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!u.hasNewline&&o(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?Ui(c,s,u,o):kn(c,u.end,i,null,u,o);const f=l.contents.range[2],m=ht(r,f,!1,o);return m.comment&&(l.comment=m.comment),l.range=[t,f,m.offset],l}function Xe(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function jn(n){var s;let e="",t=!1,i=!1;for(let r=0;r<n.length;++r){const o=n[r];switch(o[0]){case"#":e+=(e===""?"":i?`

`:`
`)+(o.substring(1)||" "),t=!0,i=!1;break;case"%":((s=n[r+1])==null?void 0:s[0])!=="#"&&(r+=1),t=!1;break;default:t||(i=!0),t=!1}}return{comment:e,afterEmptyLine:i}}class Tr{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,i,s,r)=>{const o=Xe(t);r?this.warnings.push(new or(o,i,s)):this.errors.push(new et(o,i,s))},this.directives=new ee({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:s}=jn(this.prelude);if(i){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${i}`:i;else if(s||e.directives.docStart||!r)e.commentBefore=i;else if(x(r)&&!r.flow&&r.items.length>0){let o=r.items[0];G(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${i}
${a}`:i}else{const o=r.commentBefore;r.commentBefore=o?`${i}
${o}`:i}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jn(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const s of e)yield*this.next(s);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,s)=>{const r=Xe(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",i,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=Er(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new et(Xe(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new et(Xe(e),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const t=ht(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new et(Xe(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const i=Object.assign({_directives:this.directives},this.options),s=new Ut(void 0,i);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,t,t],this.decorate(s,!1),yield s}}}const xi="\uFEFF",Vi="",Yi="",on="";function Or(n){switch(n){case xi:return"byte-order-mark";case Vi:return"doc-mode";case Yi:return"flow-error-end";case on:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function fe(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const qn=new Set("0123456789ABCDEFabcdef"),Ar=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),pt=new Set(",[]{}"),$r=new Set(` ,[]{}
\r	`),zt=n=>!n||$r.has(n);class Lr{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;t===" ";)t=this.buffer[++i+e];if(t==="\r"){const s=this.buffer[i+e+1];if(s===`
`||!s&&!this.atEnd)return e+i+1}return t===`
`||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if(t==="-"||t==="."){const i=this.buffer.substr(e,3);if((i==="---"||i==="...")&&fe(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===xi&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,i=e.indexOf("#");for(;i!==-1;){const r=e[i-1];if(r===" "||r==="	"){t=i-1;break}else i=e.indexOf("#",i+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const s=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Vi,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&fe(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!fe(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&fe(t)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(zt),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&s[0]!=="#"||i===0&&(s.startsWith("---")||s.startsWith("..."))&&fe(s[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Yi,yield*this.parseLineStart();let r=0;for(;s[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),s[r]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(zt),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||fe(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let s=i.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const r=this.continueScalar(s+1);if(r===-1)break;s=i.indexOf(`
`,r)}s!==-1&&(t=s-(i[s-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>fe(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,i;e:for(let r=this.pos;i=this.buffer[r];++r)switch(i){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const o=this.buffer[r+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let s=e+1;for(i=this.buffer[s];i===" ";)i=this.buffer[++s];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++s];e=s-1}else if(!this.blockScalarKeep)do{let r=e-1,o=this.buffer[r];o==="\r"&&(o=this.buffer[--r]);const a=r;for(;o===" ";)o=this.buffer[--r];if(o===`
`&&r>=this.pos&&r+1+t>a)e=r;else break}while(!0);return yield on,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,i=this.pos-1,s;for(;s=this.buffer[++i];)if(s===":"){const r=this.buffer[i+1];if(fe(r)||e&&pt.has(r))break;t=i}else if(fe(s)){let r=this.buffer[i+1];if(s==="\r"&&(r===`
`?(i+=1,s=`
`,r=this.buffer[i+1]):t=i),r==="#"||e&&pt.has(r))break;if(s===`
`){const o=this.continueScalar(i+1);if(o===-1)break;i=Math.max(i,o-2)}}else{if(e&&pt.has(s))break;t=i}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield on,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(zt))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(fe(t)||e&&pt.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!fe(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Ar.has(t))t=this.buffer[++e];else if(t==="%"&&qn.has(this.buffer[e+1])&&qn.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,i;do i=this.buffer[++t];while(i===" "||e&&i==="	");const s=t-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=t),s}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Cr{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const r=t+i>>1;this.lineStarts[r]<e?t=r+1:i=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const s=this.lineStarts[t-1];return{line:t,col:e-s+1}}}}function ke(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function Kn(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function Gi(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function yt(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Pe(n){var t;if(n.length===0)return[];let e=n.length;e:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function Rn(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!ke(e.start,"explicit-key-ind")&&!ke(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,Gi(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class Dr{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Lr,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Or(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const i=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(e==null?void 0:e.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const i=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in i?i.indent:0:t.type==="flow-collection"&&i.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Rn(t),i.type){case"document":i.value=t;break;case"block-scalar":i.props.push(t);break;case"block-map":{const s=i.items[i.items.length-1];if(s.value){i.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=t;else{Object.assign(s,{key:t,sep:[]}),this.onKeyLine=!s.explicitKey;return}break}case"block-seq":{const s=i.items[i.items.length-1];s.value?i.items.push({start:[],value:t}):s.value=t;break}case"flow-collection":{const s=i.items[i.items.length-1];!s||s.value?i.items.push({start:[],key:t,sep:[]}):s.sep?s.value=t:Object.assign(s,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const s=t.items[t.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&Kn(s.start)===-1&&(t.indent===0||s.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(i.type==="document"?i.end=s.start:i.items.push({start:s.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Kn(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=yt(this.peek(2)),i=Pe(t);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var i;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(i=s==null?void 0:s.value)==null?void 0:i.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,r=s&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(r&&t.sep&&!t.value){const a=[];for(let l=0;l<t.sep.length;++l){const c=t.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(ke(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(Gi(t.key)&&!ke(t.sep,"newline")){const a=Pe(t.start),l=t.key,c=t.sep;c.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(ke(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=Pe(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:o,key:null,sep:[this.sourceToken]}):ke(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);r||t.value?(e.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!ke(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:o});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var i;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const s="end"in t.value?t.value.end:void 0,r=Array.isArray(s)?s[s.length-1]:void 0;(r==null?void 0:r.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const s=e.items[e.items.length-2],r=(i=s==null?void 0:s.value)==null?void 0:i.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||ke(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while((i==null?void 0:i.type)==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:s,sep:[]}):t.sep?this.stack.push(s):Object.assign(t,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===e.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const s=yt(i),r=Pe(s);Rn(e);const o=e.end.splice(1,e.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=yt(e),i=Pe(t);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=yt(e),i=Pe(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Mr(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new Cr||null,prettyErrors:e}}function Pr(n,e={}){const{lineCounter:t,prettyErrors:i}=Mr(e),s=new Dr(t==null?void 0:t.addNewLine),r=new Tr(e);let o=null;for(const a of r.compose(s.parse(n),!0,n.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new et(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&t&&(o.errors.forEach(Bn(n,t)),o.warnings.forEach(Bn(n,t))),o}function Br(n,e,t){let i;const s=Pr(n,t);if(!s)return null;if(s.warnings.forEach(r=>bi(s.options.logLevel,r)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:i},t))}function ve(n,e){try{const t=Br(n);if(t==null)throw new Error("YAML file is empty or invalid");return{value:t,source:e}}catch(t){const i=t instanceof Error?t.message:"Unknown YAML parse error";throw new Error(`YAML parse error in ${e}: ${i}`)}}function Fr(){const n=Object.assign({"/src/games/boiler_7/game.yaml":rs,"/src/games/boiler_7/items.yaml":os,"/src/games/boiler_7/localization/en.yaml":as,"/src/games/boiler_7/rules.yaml":ls,"/src/games/boiler_7/scenes/arrival.yaml":cs,"/src/games/boiler_7/scenes/boiler_floor.yaml":fs,"/src/games/boiler_7/scenes/conclusion.yaml":us,"/src/games/boiler_7/scenes/control_room.yaml":hs,"/src/games/boiler_7/scenes/lower_chamber.yaml":ds,"/src/games/boiler_7/state.yaml":ms,"/src/games/midnight_switchboard/game.yaml":gs,"/src/games/midnight_switchboard/items.yaml":ps,"/src/games/midnight_switchboard/localization/en.yaml":ys,"/src/games/midnight_switchboard/rules.yaml":_s,"/src/games/midnight_switchboard/scenes/basement_chamber.yaml":bs,"/src/games/midnight_switchboard/scenes/basement_stairs.yaml":ws,"/src/games/midnight_switchboard/scenes/ending.yaml":vs,"/src/games/midnight_switchboard/scenes/operator_line.yaml":ks,"/src/games/midnight_switchboard/scenes/prologue.yaml":Ss,"/src/games/midnight_switchboard/scenes/records_room.yaml":Ns,"/src/games/midnight_switchboard/scenes/switchboard_room.yaml":Is,"/src/games/midnight_switchboard/state.yaml":Es}),e={};for(const[t,i]of Object.entries(n)){const s=t.split("/src/games/")[1].split("/"),r=s[0],o=s.slice(1).join("/");e[r]||(e[r]={id:r,title:r,raw:{game:"",rules:"",state:"",items:"",scenes:{},localization:{}}});const a=e[r];if(o==="game.yaml"){a.raw.game=i;try{const l=ve(i,"game.yaml").value;a.title=l.game.title}catch{}}else if(o==="rules.yaml")a.raw.rules=i;else if(o==="state.yaml")a.raw.state=i;else if(o==="items.yaml")a.raw.items=i;else if(o.startsWith("scenes/")){const l=o.replace("scenes/","");a.raw.scenes[l]=i}else if(o.startsWith("localization/")){const l=o.replace("localization/","");a.raw.localization[l]=i}}return e}class v extends Error{constructor(t,i,s){super(i);X(this,"code");X(this,"file");X(this,"path");this.code=t,this.file=s==null?void 0:s.file,this.path=s==null?void 0:s.path}toString(){let t=`[${this.code}] ${this.message}`;return this.file&&(t+=`
File: ${this.file}`),this.path&&(t+=`
Path: ${this.path}`),t}}function jr(n){Kr(n),Rr(n),Ur(n),xr(n),Vr(n),Hr(n)}function Ot(n,e){const t=Object.keys(n);if(t.length!==1)throw new v("E_CONDITION_INVALID",`Condition must contain exactly one operator at ${e}`);const i=t[0],s=n[i];if(i==="all"||i==="any"){if(!Array.isArray(s)||s.length===0)throw new v("E_CONDITION_INVALID",`"${i}" must be a non-empty array at ${e}`);s.forEach((r,o)=>Ot(r,`${e}.${i}[${o}]`));return}if(i==="not"){if(!s)throw new v("E_CONDITION_INVALID",`"not" condition missing value at ${e}`);Ot(s,`${e}.not`);return}if(i==="eq"||i==="neq"||i==="gt"||i==="gte"||i==="lt"||i==="lte"){if(typeof s!="object"||s===null||typeof s.var!="string"||!("value"in s))throw new v("E_CONDITION_INVALID",`Invalid payload for operator "${i}" at ${e}`);return}if(typeof s!="object"||s===null)throw new v("E_CONDITION_INVALID",`Invalid payload for operator "${i}" at ${e}`)}function qr(n,e,t){n&&n.forEach((i,s)=>{const r=Object.keys(i);if(r.length!==1)throw new v("E_EFFECT_INVALID",`Effect must contain exactly one operator at ${e}[${s}]`);const o=r[0],a=i[o];if(o==="set"&&!a.var)throw new v("E_EFFECT_INVALID",`Set effect missing var at ${e}[${s}]`);if(o==="add"){if(!a.var)throw new v("E_EFFECT_INVALID",`Add effect missing var at ${e}[${s}]`);if(typeof a.value=="object"&&"random"in a.value&&!/^\d+\/\d+$/.test(a.value.random))throw new v("E_EFFECT_INVALID",`Invalid random format at ${e}[${s}]`)}if(o==="add_item"||o==="remove_item"){if(!a||typeof a.id!="string")throw new v("E_EFFECT_INVALID",`${o} requires { id: string } at ${e}[${s}]`);if(!t.items.items[a.id])throw new v("E_REF_NOT_FOUND",`Unknown item "${a.id}" at ${e}[${s}]`,{file:"items.yaml",path:`items.${a.id}`})}})}function Kr(n){const e=n.manifest.game;if(!e.id||!e.title||!e.version)throw new v("E_SCHEMA_MISSING_FIELD","Missing required game metadata fields",{file:"game.yaml"})}function Rr(n){if(!n.rules.rules.systems)throw new v("E_SCHEMA_MISSING_FIELD","rules.systems is required",{file:"rules.yaml"})}function Ur(n){const e=n.state.state.variables,t=n.rules.rules.systems;for(const[i,s]of Object.entries(e)){if(s.requires&&!t[s.requires])throw new v("E_SYSTEM_DISABLED_USAGE",`State variable "${i}" requires disabled system "${s.requires}"`,{file:"state.yaml",path:`state.variables.${i}`});if(typeof s.initial!==s.type)throw new v("E_STATE_TYPE_MISMATCH",`Initial value of "${i}" does not match declared type "${s.type}"`,{file:"state.yaml",path:`state.variables.${i}.initial`})}}function xr(n){const e=n.items.items;for(const[t,i]of Object.entries(e))if(!i.name)throw new v("E_SCHEMA_MISSING_FIELD",`Item "${t}" missing name`,{file:"items.yaml",path:`items.${t}.name`})}function Vr(n){const e=new Set;for(const[t,i]of Object.entries(n.scenes)){const s=i.scene;if(e.has(s.id))throw new v("E_DUPLICATE_ID",`Duplicate scene id "${s.id}"`,{file:`scenes/${t}`,path:"scene.id"});e.add(s.id),Yr(i,t,n)}}function Yr(n,e,t){const i=new Set;for(const s of n.scene.nodes){if(i.has(s.id))throw new v("E_DUPLICATE_ID",`Duplicate node id "${s.id}" in scene "${n.scene.id}"`,{file:`scenes/${e}`,path:"scene.nodes[].id"});i.add(s.id),s.text.forEach((r,o)=>{typeof r!="string"&&"if"in r&&Ot(r.if,`scene.${n.scene.id}.node.${s.id}.text[${o}].if`)}),Gr(s,n.scene.id,e,t)}}function Gr(n,e,t,i){for(const s of n.choices){if(!s.goto)throw new v("E_SCHEMA_MISSING_FIELD",`Choice "${s.id}" is missing goto`,{file:`scenes/${t}`,path:`node.${n.id}.choices.${s.id}`});s.if&&Ot(s.if,`scene.${e}.node.${n.id}.choice.${s.id}.if`),qr(s.effects,`scene.${e}.node.${n.id}.choice.${s.id}.effects`,i)}}function Hr(n){const{scene:e,node:t}=n.manifest.game.start,i=Object.values(n.scenes).find(r=>r.scene.id===e);if(!i)throw new v("E_REF_NOT_FOUND_SCENE",`Start scene "${e}" not found`,{file:"game.yaml",path:"game.start.scene"});if(!i.scene.nodes.find(r=>r.id===t))throw new v("E_REF_NOT_FOUND_NODE",`Start node "${t}" not found in scene "${e}"`,{file:"game.yaml",path:"game.start.node"})}function Jr(n){return{manifest:n.manifest.game,rules:n.rules.rules,state:zr(n),items:Wr(n),scenes:Qr(n),localization:n.localization,language:"en"}}function zr(n){const e=n.rules.rules.state_visibility.default==="visible",t=new Map;for(const[i,s]of Object.entries(n.state.state.variables))t.set(i,{type:s.type,value:s.initial,visible:s.visible!==void 0?s.visible:e});return{variables:t}}function Wr(n){const e=new Map;for(const[t,i]of Object.entries(n.items.items))e.set(t,i);return e}function Qr(n){const e=new Map;for(const t of Object.values(n.scenes)){const i=t.scene.id;e.set(i,{id:i,nodes:Xr(t)})}return e}function Xr(n){const e=new Map;for(const t of n.scene.nodes)e.set(t.id,{id:t.id,text:t.text,choices:t.choices});return e}class Zr{constructor(e){X(this,"_at");X(this,"_state");X(this,"_history",[]);X(this,"_rng");X(this,"_inventory",new Set);const t=e.manifest.start;this._at={scene:t.scene,node:t.node},this._state=eo(e.state)}get at(){return this._at}get history(){return this._history}get rng(){return this._rng}get inventory(){return this._inventory}getVar(e){const t=this._state.variables.get(e);if(!t)throw new v("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});return t.value}setVar(e,t){const i=this._state.variables.get(e);if(!i)throw new v("E_STATE_VAR_UNDECLARED",`Unknown state var "${e}"`,{path:`state.variables.${e}`});i.value=t}getVisibleState(){const e={};for(const[t,i]of this._state.variables.entries())i.visible&&(e[t]=i.value);return e}move(e,t,i){this._at=e,this._history.push({from:i,to:e,choiceId:t,ts:Date.now()})}save(){const e={};for(const[t,i]of this._state.variables.entries())e[t]=i.value;return{version:"0.1",at:{...this._at},state:e,history:[...this._history],rng:this._rng?{...this._rng}:void 0,inventory:[...this._inventory]}}load(e){if(e.version!=="0.1")throw new v("E_SCHEMA_INVALID_TYPE",`Unsupported save version "${e.version}"`);this._at={...e.at},this._history=[...e.history];for(const[t,i]of Object.entries(e.state)){const s=this._state.variables.get(t);if(!s)throw new v("E_STATE_VAR_UNDECLARED",`Save contains unknown var "${t}"`);s.value=i}e.rng&&(this._rng={...e.rng}),e.inventory&&(this._inventory=new Set(e.inventory))}initializeRng(e){this._rng||(this._rng={seed:e,counter:0})}addItem(e){this._inventory.add(e)}removeItem(e){this._inventory.delete(e)}hasItem(e){return this._inventory.has(e)}}function eo(n){const e=new Map(n.variables);for(const[t,i]of e.entries())e.set(t,{...i});return{variables:e}}function Ae(n,e,t,i){return io(n)?no(n,e,t,i):to(n,e,t,i)}function to(n,e,t,i){const s=Object.keys(n);if(s.length!==1)throw new v("E_CONDITION_INVALID","Operator condition must contain exactly one operator");const r=s[0],o=n[r],a=i.findConditionHandler(r);if(!a)throw new v("E_CONDITION_INVALID",`Unknown condition operator "${r}"`);try{return a(o,e,t)}catch(l){throw l instanceof v?l:new v("E_CONDITION_INVALID",`Condition operator "${r}" threw an error`)}}function no(n,e,t,i){if(n.all){if(!Array.isArray(n.all)||n.all.length===0)throw new v("E_CONDITION_INVALID",'"all" must be a non-empty array');return n.all.every(s=>Ae(s,e,t,i))}if(n.any){if(!Array.isArray(n.any)||n.any.length===0)throw new v("E_CONDITION_INVALID",'"any" must be a non-empty array');return n.any.some(s=>Ae(s,e,t,i))}if(n.not)return!Ae(n.not,e,t,i);throw new v("E_CONDITION_INVALID","Empty logical condition")}function io(n){return typeof n=="object"&&("all"in n||"any"in n||"not"in n)}function so(n,e,t,i){if(!(!n||n.length===0))for(const s of n){const r=Object.keys(s)[0],o=i.findEffectHandler(r);if(!o)throw new v("E_EFFECT_INVALID",`Unknown effect operator "${r}"`);o(s[r],e,t)}}function Wt(n,e,t,i){const s=[];for(const r of n){if(typeof r=="string"){s.push(_t(r,e,t,i));continue}if(oo(r)){const o=Un(r.key,t);s.push(_t(o,e,t,i));continue}if("if"in r){if(Ae(r.if,e,t,i)){const o=r.then;if(typeof o=="string")s.push(_t(o,e,t,i));else{const a=Un(o.key,t);s.push(_t(a,e,t,i))}}continue}throw new v("E_SCHEMA_INVALID_TYPE","Unknown text fragment structure")}return s}function Un(n,e){const t=e.language,i=e.localization[t];if(!i)throw new v("E_LOCALIZATION_KEY_MISSING",`Language "${t}" not loaded`);const s=n.split(".");let r=i;for(const o of s)if(r=r==null?void 0:r[o],r===void 0)throw new v("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" not found for language "${t}"`);if(typeof r!="string")throw new v("E_LOCALIZATION_KEY_MISSING",`Localization key "${n}" does not resolve to string`);return r}function _t(n,e,t,i){const s=/\{\{if (.*?)\}\}([\s\S]*?)\{\{\/if\}\}/g;return n=n.replace(s,(r,o,a)=>{const l=ro(o);return Ae(l,e,t,i)?a:""}),n.replace(/\{\{(.*?)\}\}/g,(r,o)=>{const a=o.trim();if(a==="inventory_count")return String(e.inventory.size);if(a==="inventory_list")return e.inventory.size===0?"(none)":Array.from(e.inventory).map(c=>{const u=t.items.get(c);if(!u)throw new v("E_REF_NOT_FOUND",`Inventory contains unknown item "${c}"`);return u.name}).join(", ");if(a.startsWith("has_item:")){const l=a.slice(9).trim();if(!t.items.has(l))throw new v("E_REF_NOT_FOUND",`Interpolation references unknown item "${l}"`);return String(e.hasItem(l))}try{const l=e.getVar(a);return String(l)}catch{throw new v("E_STATE_VAR_UNDECLARED",`Interpolation variable "${a}" not declared`)}})}function ro(n){const e=n.trim().split(/\s+/);if(e.length===0)throw new v("E_CONDITION_INVALID","Empty inline condition");const t=e[0];if(t==="has_item"){if(e.length!==2)throw new v("E_CONDITION_INVALID","has_item requires one argument");return{has_item:{id:e[1]}}}if(e.length!==3)throw new v("E_CONDITION_INVALID",`Invalid inline condition format "${n}"`);const[i,s,r]=e;let o=r;return r==="true"?o=!0:r==="false"?o=!1:isNaN(Number(r))||(o=Number(r)),{[t]:{var:s,value:o}}}function oo(n){return typeof n=="object"&&n!==null&&"key"in n}class ao{constructor(){X(this,"plugins",[]);X(this,"finalized",!1)}register(e){if(this.finalized)throw new v("E_PLUGIN_REGISTRY_LOCKED","Cannot register plugins after registry is finalized");this.plugins.push(e)}finalize(){const e=new Set;for(const t of this.plugins){if(e.has(t.id))throw new v("E_PLUGIN_DUPLICATE_ID",`Duplicate plugin id "${t.id}"`);e.add(t.id)}for(const t of this.plugins)for(const i of t.dependsOn??[])if(!e.has(i))throw new v("E_PLUGIN_DEPENDENCY_MISSING",`Plugin "${t.id}" depends on missing plugin "${i}"`);this.plugins=lo(this.plugins),this.finalized=!0}getAll(){return this.plugins}runHook(e,t,i){var s;for(const r of this.plugins){const o=(s=r.hooks)==null?void 0:s[e];o&&o(t,i)}}findConditionHandler(e){var t;for(const i of this.plugins){const s=(t=i.conditions)==null?void 0:t[e];if(s)return s}}findEffectHandler(e){var t;for(const i of this.plugins){const s=(t=i.effects)==null?void 0:t[e];if(s)return s}}}function lo(n){var a,l;const e=new Map;for(const c of n)e.set(c.id,c);const t=new Map,i=new Map;for(const c of n)t.set(c.id,new Set),i.set(c.id,0);function s(c,u){t.get(c).has(u)||(t.get(c).add(u),i.set(u,(i.get(u)??0)+1))}for(const c of n)for(const u of c.dependsOn??[])s(u,c.id);for(const c of n){for(const u of((a=c.order)==null?void 0:a.after)??[]){if(!e.has(u))throw new v("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${c.id}" orders after unknown plugin "${u}"`);s(u,c.id)}for(const u of((l=c.order)==null?void 0:l.before)??[]){if(!e.has(u))throw new v("E_PLUGIN_ORDER_UNKNOWN",`Plugin "${c.id}" orders before unknown plugin "${u}"`);s(c.id,u)}}const r=[];for(const c of n)(i.get(c.id)??0)===0&&r.push(c.id);const o=[];for(;r.length>0;){const c=r.shift();o.push(e.get(c));for(const u of t.get(c))i.set(u,(i.get(u)??0)-1),(i.get(u)??0)===0&&r.push(u)}if(o.length!==n.length)throw new v("E_PLUGIN_ORDER_CYCLE","Plugin ordering contains a cycle");return o}const co={id:"core",conditions:{eq(n,e){const{var:t,value:i}=n;return e.getVar(t)===i},neq(n,e){const{var:t,value:i}=n;return e.getVar(t)!==i},gt(n,e){return bt(n,e,(t,i)=>t>i)},gte(n,e){return bt(n,e,(t,i)=>t>=i)},lt(n,e){return bt(n,e,(t,i)=>t<i)},lte(n,e){return bt(n,e,(t,i)=>t<=i)}},effects:{add(n,e,t){if(!n||typeof n.var!="string")throw new v("E_EFFECT_INVALID","add requires { var: string, value: number | RandomValue }");const i=e.getVar(n.var);if(typeof i!="number")throw new v("E_STATE_TYPE_MISMATCH",`Cannot add to non-number variable "${n.var}"`);let s;if(typeof n.value=="number")s=n.value;else if(typeof n.value=="object"&&n.value&&"random"in n.value){if(!t.rules.systems.randomness)throw new v("E_SYSTEM_DISABLED_USAGE","Randomness system disabled");s=fo(n.value.random,e)}else throw new v("E_EFFECT_INVALID","Invalid add value");console.log("[Core.add] applying",{var:n.var,current:i,delta:s,next:i+s,payload:n}),e.setVar(n.var,i+s)},set(n,e){const{var:t,value:i}=n,s=e.getVar(t);if(typeof s!=typeof i)throw new v("E_STATE_TYPE_MISMATCH",`Cannot set "${t}" (${typeof s}) to ${typeof i}`);e.setVar(t,i)}}};function bt(n,e,t){const{var:i,value:s}=n,r=e.getVar(i);if(typeof r!="number"||typeof s!="number")throw new v("E_CONDITION_INVALID","Numeric comparison requires numbers");return t(r,s)}function fo(n,e){const t=e.rng;if(!t)throw console.error("[Core.add] RNG missing. Did randomness plugin initialize it?"),new v("E_EFFECT_INVALID","Randomness system enabled but RNG state missing");const i=n.split("/");if(i.length!==2)throw new v("E_EFFECT_INVALID",`Invalid random format "${n}"`);const s=Number(i[0]),r=Number(i[1]);if(!Number.isFinite(s)||!Number.isFinite(r)||r<=0)throw new v("E_EFFECT_INVALID",`Invalid random values "${n}"`);const o={seed:t.seed,counter:t.counter},a=t.seed,l=t.counter++,c=Math.abs(Math.sin(a+l)*1e4)%1,u=c<s/r?1:0;return console.log("[Core.add] resolveRandom",{randomString:n,before:o,after:{seed:t.seed,counter:t.counter},rand:c,threshold:s/r,out:u}),c<s/r?1:0}const uo={id:"randomness",order:{after:["core"]},dependsOn:["core"],hooks:{onStart(n){n.initializeRng(Date.now())}}},ho={id:"inventory",dependsOn:["core"],order:{after:["core"]},conditions:{has_item(n,e,t){if(!n||typeof n.id!="string")throw new v("E_CONDITION_INVALID","has_item requires { id: string }");if(!t.items.has(n.id))throw new v("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);return e.hasItem(n.id)}},effects:{add_item(n,e,t){if(!n||typeof n.id!="string")throw new v("E_EFFECT_INVALID","add_item requires { id: string }");if(!t.items.has(n.id))throw new v("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.addItem(n.id)},remove_item(n,e,t){if(!n||typeof n.id!="string")throw new v("E_EFFECT_INVALID","remove_item requires { id: string }");if(!t.items.has(n.id))throw new v("E_REF_NOT_FOUND",`Unknown item "${n.id}"`);e.removeItem(n.id)}}};class mo{constructor(e){X(this,"model");X(this,"session");X(this,"plugins",new ao);this.model=e,this.session=new Zr(e),this.assertNodeExists(this.session.at),this.plugins.register(co),this.model.rules.systems.randomness&&this.plugins.register(uo),this.model.rules.systems.inventory&&this.plugins.register(ho),this.plugins.finalize()}start(){return this.plugins.runHook("onStart",this.session,this.model),this.assertNodeExists(this.session.at),this.getViewModel()}getViewModel(){const e=this.session.at,t=this.getNode(e);return{gameTitle:this.model.manifest.title,sceneId:e.scene,nodeId:e.node,text:Wt(t.text,this.session,this.model,this.plugins),choices:t.choices.filter(i=>!i.if||Ae(i.if,this.session,this.model,this.plugins)).map(i=>({id:i.id,text:this.resolveChoiceText(i.text),enabled:!0})),visibleState:this.session.getVisibleState(),inventory:Array.from(this.session.inventory).map(i=>{const s=this.model.items.get(i);if(!s)throw new v("E_REF_NOT_FOUND",`Inventory contains unknown item "${i}"`);const r=o=>{if(o)return Wt([{key:o}],this.session,this.model,this.plugins)[0]};return{id:i,name:r(s.name)??s.name,description:r(s.description)??s.description}})}}resolveChoiceText(e){if(e.includes("."))try{return Wt([{key:e}],this.session,this.model,this.plugins)[0]}catch{return e}return e}choose(e){const t=this.session.at,s=this.getNode(t).choices.find(o=>o.id===e);if(!s)throw new v("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" not found in node "${t.scene}.${t.node}"`);if(console.groupCollapsed(`[Engine] choose("${e}")`),console.log("From:",t),console.log("Choice:",s),console.log("State before:",this.session.getVisibleState()),this.plugins.runHook("beforeChoice",this.session,this.model),s.if&&!Ae(s.if,this.session,this.model,this.plugins))throw console.warn("Choice condition failed at runtime:",s.if),console.log("State at failure:",this.session.getVisibleState()),console.groupEnd(),new v("E_RUNTIME_ILLEGAL_CHOICE",`Choice "${e}" is not currently available`);const r={scene:s.goto.scene,node:s.goto.node};this.assertNodeExists(r);try{this.plugins.runHook("beforeTransition",this.session,this.model),console.log("Applying effects:",s.effects??[]),so(s.effects,this.session,this.model,this.plugins),console.log("State after effects:",this.session.getVisibleState()),this.session.move(r,e,t),console.log("Moved to:",this.session.at),this.plugins.runHook("afterTransition",this.session,this.model),this.plugins.runHook("afterChoice",this.session,this.model);const o=this.getViewModel();return console.log("VM:",{sceneId:o.sceneId,nodeId:o.nodeId,choices:o.choices.map(a=>a.id)}),console.groupEnd(),o}catch(o){throw console.error("[Engine] choose crashed:",o),console.log("State at crash:",this.session.getVisibleState()),console.log("At crash nodeRef:",this.session.at),console.groupEnd(),o}}save(){return this.session.save()}load(e){return this.session.load(e),this.assertNodeExists(this.session.at),this.getViewModel()}getNode(e){const t=this.model.scenes.get(e.scene);if(!t)throw new v("E_REF_NOT_FOUND_SCENE",`Scene "${e.scene}" not found`);const i=t.nodes.get(e.node);if(!i)throw new v("E_REF_NOT_FOUND_NODE",`Node "${e.node}" not found in scene "${e.scene}"`);return i}assertNodeExists(e){this.getNode(e)}getCurrentNodeRef(){return this.session.at}getFullState(){return this.session.save().state}getHistory(){return this.session.history}getAllScenes(){return this.model.scenes}getInventory(){return Array.from(this.session.inventory).map(e=>{const t=this.model.items.get(e);return{id:e,name:t.name,description:t.description}})}}const Be=[];function go(n,e=H){let t;const i=new Set;function s(a){if(lt(n,a)&&(n=a,t)){const l=!Be.length;for(const c of i)c[1](),Be.push(c,n);if(l){for(let c=0;c<Be.length;c+=2)Be[c][0](Be[c+1]);Be.length=0}}}function r(a){s(a(n))}function o(a,l=H){const c=[a,l];return i.add(c),i.size===1&&(t=e(s,r)||H),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}const _e=go({engine:null,viewModel:null});function xn(n,e,t){const i=n.slice();return i[4]=e[t][0],i[5]=e[t][1],i}function Vn(n,e,t){const i=n.slice();return i[8]=e[t],i}function Yn(n){var Nn,In;let e,t,i,s,r,o,a,l=((Nn=n[1].viewModel)==null?void 0:Nn.sceneId)+"",c,u,f=((In=n[1].viewModel)==null?void 0:In.nodeId)+"",m,d,p,h,g,_,k,I=JSON.stringify(n[1].engine.getFullState(),null,2)+"",S,E,A,y,b,T,D,q=JSON.stringify(n[1].engine.getInventory(),null,2)+"",L,z,M,se,R,de,me,W=JSON.stringify(n[1].engine.getHistory(),null,2)+"",N,P,Q,C,pe,Sn,Ce=ae(Array.from(n[1].engine.getAllScenes().entries())),Z=[];for(let U=0;U<Ce.length;U+=1)Z[U]=Hn(xn(n,Ce,U));return{c(){e=O("div"),t=O("h3"),t.textContent="DEBUG PANEL",i=K(),s=O("section"),r=O("strong"),r.textContent="Current Node:",o=K(),a=O("div"),c=B(l),u=B(`.
        `),m=B(f),d=K(),p=O("section"),h=O("strong"),h.textContent="State:",g=K(),_=O("pre"),k=B(""),S=B(I),E=B(`
      `),A=K(),y=O("section"),b=O("strong"),b.textContent="Inventory:",T=K(),D=O("pre"),L=B(q),z=K(),M=O("section"),se=O("strong"),se.textContent="History:",R=K(),de=O("pre"),me=B(""),N=B(W),P=B(`
      `),Q=K(),C=O("section"),pe=O("strong"),pe.textContent="Jump To:",Sn=K();for(let U=0;U<Z.length;U+=1)Z[U].c();F(s,"class","svelte-1lq35cb"),F(p,"class","svelte-1lq35cb"),F(y,"class","svelte-1lq35cb"),F(M,"class","svelte-1lq35cb"),F(C,"class","svelte-1lq35cb"),F(e,"class","debug svelte-1lq35cb")},m(U,ye){J(U,e,ye),w(e,t),w(e,i),w(e,s),w(s,r),w(s,o),w(s,a),w(a,c),w(a,u),w(a,m),w(e,d),w(e,p),w(p,h),w(p,g),w(p,_),w(_,k),w(_,S),w(_,E),w(e,A),w(e,y),w(y,b),w(y,T),w(y,D),w(D,L),w(e,z),w(e,M),w(M,se),w(M,R),w(M,de),w(de,me),w(de,N),w(de,P),w(e,Q),w(e,C),w(C,pe),w(C,Sn);for(let Ne=0;Ne<Z.length;Ne+=1)Z[Ne]&&Z[Ne].m(C,null)},p(U,ye){var Ne,En;if(ye&2&&l!==(l=((Ne=U[1].viewModel)==null?void 0:Ne.sceneId)+"")&&te(c,l),ye&2&&f!==(f=((En=U[1].viewModel)==null?void 0:En.nodeId)+"")&&te(m,f),ye&2&&I!==(I=JSON.stringify(U[1].engine.getFullState(),null,2)+"")&&te(S,I),ye&2&&q!==(q=JSON.stringify(U[1].engine.getInventory(),null,2)+"")&&te(L,q),ye&2&&W!==(W=JSON.stringify(U[1].engine.getHistory(),null,2)+"")&&te(N,W),ye&6){Ce=ae(Array.from(U[1].engine.getAllScenes().entries()));let re;for(re=0;re<Ce.length;re+=1){const Tn=xn(U,Ce,re);Z[re]?Z[re].p(Tn,ye):(Z[re]=Hn(Tn),Z[re].c(),Z[re].m(C,null))}for(;re<Z.length;re+=1)Z[re].d(1);Z.length=Ce.length}},d(U){U&&Y(e),Ve(Z,U)}}}function Gn(n){let e,t=n[8]+"",i,s,r;function o(){return n[3](n[4],n[8])}return{c(){e=O("button"),i=B(t),F(e,"class","svelte-1lq35cb")},m(a,l){J(a,e,l),w(e,i),s||(r=st(e,"click",o),s=!0)},p(a,l){n=a,l&2&&t!==(t=n[8]+"")&&te(i,t)},d(a){a&&Y(e),s=!1,r()}}}function Hn(n){let e,t,i=n[4]+"",s,r,o,a=ae(Array.from(n[5].nodes.keys())),l=[];for(let c=0;c<a.length;c+=1)l[c]=Gn(Vn(n,a,c));return{c(){e=O("div"),t=O("strong"),s=B(i),r=K();for(let c=0;c<l.length;c+=1)l[c].c();o=K()},m(c,u){J(c,e,u),w(e,t),w(t,s),w(e,r);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null);w(e,o)},p(c,u){if(u&2&&i!==(i=c[4]+"")&&te(s,i),u&6){a=ae(Array.from(c[5].nodes.keys()));let f;for(f=0;f<a.length;f+=1){const m=Vn(c,a,f);l[f]?l[f].p(m,u):(l[f]=Gn(m),l[f].c(),l[f].m(e,o))}for(;f<l.length;f+=1)l[f].d(1);l.length=a.length}},d(c){c&&Y(e),Ve(l,c)}}}function po(n){let e,t=n[0]&&n[1].engine&&Yn(n);return{c(){t&&t.c(),e=li()},m(i,s){t&&t.m(i,s),J(i,e,s)},p(i,[s]){i[0]&&i[1].engine?t?t.p(i,s):(t=Yn(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(i){i&&Y(e),t&&t.d(i)}}}function yo(n,e,t){let i;ai(n,_e,a=>t(1,i=a));let{visible:s=!1}=e;function r(a,l){const c=Qt(_e);if(!c.engine)return;const u=c.engine.save();u.at={scene:a,node:l};const f=c.engine.load(u);_e.set({engine:c.engine,viewModel:f})}const o=(a,l)=>r(a,l);return n.$$set=a=>{"visible"in a&&t(0,s=a.visible)},[s,i,r,o]}class _o extends Ct{constructor(e){super(),Lt(this,e,yo,po,lt,{visible:0})}}function bo(n){let e,t;return{c(){e=O("span"),t=B(n[0])},m(i,s){J(i,e,s),w(e,t)},p(i,[s]){s&1&&te(t,i[0])},i:H,o:H,d(i){i&&Y(e)}}}function wo(n,e,t){let{text:i}=e,{speed:s=20}=e,{onComplete:r}=e,o="",a=0,l;Xi(()=>{c()});function c(){l=setInterval(()=>{a<i.length?(t(0,o+=i[a]),a++):(clearInterval(l),r==null||r())},s)}return n.$$set=u=>{"text"in u&&t(1,i=u.text),"speed"in u&&t(2,s=u.speed),"onComplete"in u&&t(3,r=u.onComplete)},[o,i,s,r]}class vo extends Ct{constructor(e){super(),Lt(this,e,wo,bo,lt,{text:1,speed:2,onComplete:3})}}function Jn(n){let e;return{c(){e=B("_")},m(t,i){J(t,e,i)},d(t){t&&Y(e)}}}function ko(n){let e,t=n[0]&&Jn();return{c(){e=O("span"),t&&t.c(),F(e,"class","cursor svelte-l3cu36")},m(i,s){J(i,e,s),t&&t.m(e,null)},p(i,[s]){i[0]?t||(t=Jn(),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:H,o:H,d(i){i&&Y(e),t&&t.d()}}}function So(n,e,t){let i=!0;return setInterval(()=>{t(0,i=!i)},500),[i]}class No extends Ct{constructor(e){super(),Lt(this,e,So,ko,lt,{})}}function zn(n,e,t){const i=n.slice();return i[23]=e[t],i}function Wn(n,e,t){const i=n.slice();return i[26]=e[t],i}function Qn(n,e,t){const i=n.slice();return i[29]=e[t],i[31]=t,i}function Xn(n,e,t){const i=n.slice();return i[20]=e[t],i}function Io(n){let e,t,i,s,r,o,a,l,c,u,f,m,d,p,h,g,_,k,I,S,E,A,y,b,T,D=Oo(n),q=ae(n[5]),L=[];for(let N=0;N<q.length;N+=1)L[N]=Zn(Qn(n,q,N));const z=N=>ue(L[N],1,1,()=>{L[N]=null});let M=n[6]&&ei(),se=ae(n[0].viewModel.choices),R=[];for(let N=0;N<se.length;N+=1)R[N]=ti(Wn(n,se,N));function de(N,P){return N[0].viewModel.inventory.length===0?Co:Lo}let me=de(n),W=me(n);return A=new _o({props:{visible:n[2]}}),{c(){e=O("div"),t=O("div"),i=O("div"),s=O("h1"),r=B(n[4]),o=K(),a=O("button"),a.textContent="[ Eject Disc ]",l=K(),D&&D.c(),c=K(),u=O("div");for(let N=0;N<L.length;N+=1)L[N].c();f=K(),M&&M.c(),m=K(),d=O("div");for(let N=0;N<R.length;N+=1)R[N].c();p=K(),h=O("div"),g=O("h3"),g.textContent="Inventory",_=K(),W.c(),k=K(),I=O("div"),S=O("button"),S.textContent="[ Toggle Debug ]",E=K(),an(A.$$.fragment),F(a,"class","eject svelte-16ktxkk"),F(i,"class","title-row svelte-16ktxkk"),F(t,"class","header"),F(u,"class","content"),F(d,"class","choices svelte-16ktxkk"),F(h,"class","inventory svelte-16ktxkk"),F(I,"class","controls svelte-16ktxkk"),F(e,"class","terminal svelte-16ktxkk")},m(N,P){J(N,e,P),w(e,t),w(t,i),w(i,s),w(s,r),w(i,o),w(i,a),w(t,l),D&&D.m(t,null),w(e,c),w(e,u);for(let Q=0;Q<L.length;Q+=1)L[Q]&&L[Q].m(u,null);w(u,f),M&&M.m(u,null),w(e,m),w(e,d);for(let Q=0;Q<R.length;Q+=1)R[Q]&&R[Q].m(d,null);w(e,p),w(e,h),w(h,g),w(h,_),W.m(h,null),w(e,k),w(e,I),w(I,S),J(N,E,P),At(A,N,P),y=!0,b||(T=[st(a,"click",n[11]),st(S,"click",n[16])],b=!0)},p(N,P){if((!y||P[0]&16)&&te(r,N[4]),D.p(N,P),P[0]&8608){q=ae(N[5]);let C;for(C=0;C<q.length;C+=1){const pe=Qn(N,q,C);L[C]?(L[C].p(pe,P),ie(L[C],1)):(L[C]=Zn(pe),L[C].c(),ie(L[C],1),L[C].m(u,f))}for(Nt(),C=q.length;C<L.length;C+=1)z(C);It()}if(N[6]?M?P[0]&64&&ie(M,1):(M=ei(),M.c(),ie(M,1),M.m(u,null)):M&&(Nt(),ue(M,1,1,()=>{M=null}),It()),P[0]&4097){se=ae(N[0].viewModel.choices);let C;for(C=0;C<se.length;C+=1){const pe=Wn(N,se,C);R[C]?R[C].p(pe,P):(R[C]=ti(pe),R[C].c(),R[C].m(d,null))}for(;C<R.length;C+=1)R[C].d(1);R.length=se.length}me===(me=de(N))&&W?W.p(N,P):(W.d(1),W=me(N),W&&(W.c(),W.m(h,null)));const Q={};P[0]&4&&(Q.visible=N[2]),A.$set(Q)},i(N){if(!y){for(let P=0;P<q.length;P+=1)ie(L[P]);ie(M),ie(A.$$.fragment,N),y=!0}},o(N){L=L.filter(Boolean);for(let P=0;P<L.length;P+=1)ue(L[P]);ue(M),ue(A.$$.fragment,N),y=!1},d(N){N&&(Y(e),Y(E)),D&&D.d(),Ve(L,N),M&&M.d(),Ve(R,N),W.d(),$t(A,N),b=!1,He(T)}}}function Eo(n){let e,t,i,s,r=ae(n[9]),o=[];for(let a=0;a<r.length;a+=1)o[a]=ii(Xn(n,r,a));return{c(){e=O("div"),t=O("h1"),t.textContent="Insert Game Disc",i=K(),s=O("div");for(let a=0;a<o.length;a+=1)o[a].c();F(s,"class","choices svelte-16ktxkk"),F(e,"class","terminal svelte-16ktxkk")},m(a,l){J(a,e,l),w(e,t),w(e,i),w(e,s);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null)},p(a,l){if(l[0]&1536){r=ae(a[9]);let c;for(c=0;c<r.length;c+=1){const u=Xn(a,r,c);o[c]?o[c].p(u,l):(o[c]=ii(u),o[c].c(),o[c].m(s,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},i:H,o:H,d(a){a&&Y(e),Ve(o,a)}}}function To(n){let e,t,i;return{c(){e=O("div"),t=O("pre"),i=B(n[1]),F(t,"class","error svelte-16ktxkk"),F(e,"class","terminal svelte-16ktxkk")},m(s,r){J(s,e,r),w(e,t),w(t,i)},p(s,r){r[0]&2&&te(i,s[1])},i:H,o:H,d(s){s&&Y(e)}}}function Oo(n){let e,t,i=n[0].viewModel.sceneId+"",s,r,o=n[0].viewModel.nodeId+"",a;return{c(){e=O("div"),t=O("i"),s=B(i),r=B("."),a=B(o),F(e,"class","node")},m(l,c){J(l,e,c),w(e,t),w(t,s),w(t,r),w(t,a)},p(l,c){c[0]&1&&i!==(i=l[0].viewModel.sceneId+"")&&te(s,i),c[0]&1&&o!==(o=l[0].viewModel.nodeId+"")&&te(a,o)},d(l){l&&Y(e)}}}function Ao(n){let e,t;return e=new vo({props:{text:n[29],speed:n[7],onComplete:n[31]===n[5].length-1?n[13]:void 0}}),{c(){an(e.$$.fragment)},m(i,s){At(e,i,s),t=!0},p(i,s){const r={};s[0]&32&&(r.text=i[29]),s[0]&128&&(r.speed=i[7]),s[0]&32&&(r.onComplete=i[31]===i[5].length-1?i[13]:void 0),e.$set(r)},i(i){t||(ie(e.$$.fragment,i),t=!0)},o(i){ue(e.$$.fragment,i),t=!1},d(i){$t(e,i)}}}function $o(n){let e,t=n[29]+"",i;return{c(){e=O("span"),i=B(t)},m(s,r){J(s,e,r),w(e,i)},p(s,r){r[0]&32&&t!==(t=s[29]+"")&&te(i,t)},i:H,o:H,d(s){s&&Y(e)}}}function Zn(n){let e,t,i,s;const r=[$o,Ao],o=[];function a(l,c){return l[8]?0:1}return t=a(n),i=o[t]=r[t](n),{c(){e=O("p"),i.c()},m(l,c){J(l,e,c),o[t].m(e,null),s=!0},p(l,c){let u=t;t=a(l),t===u?o[t].p(l,c):(Nt(),ue(o[u],1,1,()=>{o[u]=null}),It(),i=o[t],i?i.p(l,c):(i=o[t]=r[t](l),i.c()),ie(i,1),i.m(e,null))},i(l){s||(ie(i),s=!0)},o(l){ue(i),s=!1},d(l){l&&Y(e),o[t].d()}}}function ei(n){let e,t;return e=new No({}),{c(){an(e.$$.fragment)},m(i,s){At(e,i,s),t=!0},i(i){t||(ie(e.$$.fragment,i),t=!0)},o(i){ue(e.$$.fragment,i),t=!1},d(i){$t(e,i)}}}function ti(n){let e,t,i=n[26].text+"",s,r,o,a,l;function c(){return n[15](n[26])}return{c(){e=O("button"),t=B("> "),s=B(i),r=K(),e.disabled=o=!n[26].enabled,F(e,"class","svelte-16ktxkk")},m(u,f){J(u,e,f),w(e,t),w(e,s),w(e,r),a||(l=st(e,"click",c),a=!0)},p(u,f){n=u,f[0]&1&&i!==(i=n[26].text+"")&&te(s,i),f[0]&1&&o!==(o=!n[26].enabled)&&(e.disabled=o)},d(u){u&&Y(e),a=!1,l()}}}function Lo(n){let e,t=ae(n[0].viewModel.inventory),i=[];for(let s=0;s<t.length;s+=1)i[s]=ni(zn(n,t,s));return{c(){e=O("ul");for(let s=0;s<i.length;s+=1)i[s].c()},m(s,r){J(s,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(s,r){if(r[0]&1){t=ae(s[0].viewModel.inventory);let o;for(o=0;o<t.length;o+=1){const a=zn(s,t,o);i[o]?i[o].p(a,r):(i[o]=ni(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&Y(e),Ve(i,s)}}}function Co(n){let e;return{c(){e=O("p"),e.textContent="(empty)",F(e,"class","muted svelte-16ktxkk")},m(t,i){J(t,e,i)},p:H,d(t){t&&Y(e)}}}function ni(n){let e,t,i=n[23].name+"",s,r,o;return{c(){e=O("li"),t=B("• "),s=B(i),r=K(),F(e,"title",o=n[23].description)},m(a,l){J(a,e,l),w(e,t),w(e,s),w(e,r)},p(a,l){l[0]&1&&i!==(i=a[23].name+"")&&te(s,i),l[0]&1&&o!==(o=a[23].description)&&F(e,"title",o)},d(a){a&&Y(e)}}}function ii(n){let e,t,i;function s(){return n[14](n[20])}return{c(){e=O("button"),e.textContent=`> ${n[20].title} `,F(e,"class","svelte-16ktxkk")},m(r,o){J(r,e,o),t||(i=st(e,"click",s),t=!0)},p(r,o){n=r},d(r){r&&Y(e),t=!1,i()}}}function Do(n){let e,t,i,s;const r=[To,Eo,Io],o=[];function a(l,c){return l[1]?0:l[3]?l[0].viewModel?2:-1:1}return~(e=a(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=li()},m(l,c){~e&&o[e].m(l,c),J(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(t&&(Nt(),ue(o[u],1,1,()=>{o[u]=null}),It()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),ie(t,1),t.m(i.parentNode,i)):t=null)},i(l){s||(ie(t),s=!0)},o(l){ue(t),s=!1},d(l){l&&Y(i),~e&&o[e].d(l)}}}function Mo(n,e,t){let i;ai(n,_e,y=>t(0,i=y));let s=null,r=!1,o=null,a=null,l=[],c=0,u=!1,f=10,m=!1;const d=Fr(),p=[];for(const[y,b]of Object.entries(d))try{const T=ve(b.raw.game,"game.yaml").value;p.push({id:y,title:T.game.title})}catch{}function h(y){try{const b=d[y];if(!b)throw new Error(`Game "${y}" not found`);const T=b.raw,D=ve(T.game,"game.yaml").value,q=ve(T.rules,"rules.yaml").value,L=ve(T.state,"state.yaml").value,z=ve(T.items,"items.yaml").value,M={};for(const[N,P]of Object.entries(T.scenes))M[N]=ve(P,`scenes/${N}`).value;I(D.game.ui.text_speed);const se={};for(const[N,P]of Object.entries(T.localization)){const Q=N.replace(/\.ya?ml$/,"");se[Q]=ve(P,`localization/${N}`).value}const R={manifest:D,rules:q,state:L,items:z,scenes:M,localization:se};jr(R);const de=Jr(R),me=new mo(de),W=me.start();_e.set({engine:me,viewModel:W}),t(3,o=y),t(4,a=D.game.title),t(1,s=null)}catch(b){t(1,s=b instanceof Error?b.toString():String(b))}}function g(){t(3,o=null),t(4,a=null),_e.set({engine:null,viewModel:null})}function _(y){const b=Qt(_e);if(b.engine)try{console.groupCollapsed(`[UI] choose("${y}")`),console.log("Before:",{at:b.engine.getCurrentNodeRef(),visibleState:b.engine.getFullState()});const T=b.engine.choose(y);console.log("After:",{at:b.engine.getCurrentNodeRef(),visibleState:b.engine.getFullState(),vm:{sceneId:T.sceneId,nodeId:T.nodeId,choices:T.choices.map(D=>D.id)}}),_e.set({engine:b.engine,viewModel:T}),t(1,s=null)}catch(T){console.error("[UI] choose failed:",T),t(1,s=T instanceof Error?T.toString():String(T))}finally{console.groupEnd()}}function k(){const y=Qt(_e).viewModel;y&&(c++,c<y.text.length?t(5,l=[...l,y.text[c]]):t(6,u=!1))}function I(y){if(t(8,m=!1),typeof y=="number"){t(7,f=Math.max(0,y)),f===0&&t(8,m=!0);return}switch(y){case"slow":t(7,f=40);break;case"normal":t(7,f=20);break;case"fast":t(7,f=10);break;case"instant":t(7,f=0),t(8,m=!0);break;default:t(7,f=20)}}const S=y=>h(y.id),E=y=>_(y.id),A=()=>t(2,r=!r);return n.$$.update=()=>{if(n.$$.dirty[0]&1&&i.viewModel){const y=i.viewModel.text;t(5,l=[]),c=0,y.length>0&&(t(5,l=[y[0]]),t(6,u=!0))}},[i,s,r,o,a,l,u,f,m,p,h,g,_,k,S,E,A]}class Po extends Ct{constructor(e){super(),Lt(this,e,Mo,Do,lt,{},null,[-1,-1])}}new Po({target:document.getElementById("app")});
