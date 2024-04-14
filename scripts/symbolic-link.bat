chcp 65001

REM テスト用シンボリックリンク作成バッチファイル
REM 管理者権限で起動したコマンドプロンプトでnode-core直下から実行すること

cd .\src\__test__\_resources_\util\iteration\getFsGenerator.test\dir1a
rmdir dir1b-2a_sl
mklink /d dir1b-2a_sl ..\dir1b\dir1b-2a
cd ..\..\..\..\..\..\..\

cd .\src\__test__\_resources_\util\iteration\getFsGenerator.test\dir1a
rmdir dir1b-2b_jc
mklink /j dir1b-2b_jc ..\dir1b\dir1b-2b
cd ..\..\..\..\..\..\..\

pause